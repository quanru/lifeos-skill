# 配置 LifeOS Pro 与 Aino Desktop

用户要解释或修改产品配置时使用本入口。普通笔记工作流继续使用无子命令的 `lifeos config`；它返回知识库查询配置，不代表两个应用分别生效的完整设置。

配置说明由代码生成，入口为 [配置参考](settings__index.md)。先查字段定义，再读取指定产品的运行配置。所有命令均可带 `vault=/absolute/path`，明确使用 `target=lifeos-pro` 或 `target=aino-desktop`，不隐式同时修改两端。

```bash
npx -y @life-os/cli config schema target=aino-desktop group=periodic --json
npx -y @life-os/cli config explain target=aino-desktop key=periodicNotesPath vault=/path/to/vault --json
```

`schema` 返回代码生成的说明、校验结构、默认值、存储层、访问权限和生效说明。`get` / `explain` 默认连接正在运行的应用，返回运行时值、来源及修订版本。CLI 与应用的配置契约不一致时停止写入，不根据较新文档猜测旧应用的行为。

## 修改与验证

把用户授权的最小变更写成 JSON 对象。数组是完整替换，先读取现有配置并保留未修改的项目。不要把读取结果中的脱敏占位对象作为配置值写回。

```bash
npx -y @life-os/cli config plan target=aino-desktop vault=/path/to/vault patch=/private/path/patch.json out=/private/path/plan.json --json
npx -y @life-os/cli config apply vault=/path/to/vault plan=/private/path/plan.json out=/private/path/receipt.json --wait --json
npx -y @life-os/cli config verify vault=/path/to/vault receipt=/private/path/receipt.json --json
```

`apply` 始终等待保存和必要的运行时刷新，`--wait` 可用于显式表达这一意图。用户已授权的普通配置修改可以直接执行，不重复请求确认。不得将配置修改扩大成文件迁移、删除笔记或启动用户未要求的远程操作。

只有 `verify` 返回 `verified: true` 才能报告运行时已生效。它核对目标知识库、应用、配置契约、运行实例、修订版本及涉及字段。冲突时重新读取和生成计划，不能反复重放旧计划。应用未运行、超时或刷新失败时准确报告状态，不能仅凭文件内容正确宣称生效。

运行时值已生效不等于所有业务行为都经过实测。需要验证业务行为时，使用无副作用的查询或路径预览；若要创建测试笔记，应使用隔离知识库或用户授权的测试范围。开发验收还应验证真实应用行为并截图。

`config reset target=... key=... out=...` 生成清除该字段显式配置的计划，再使用同样的 `apply` / `verify` 流程。恢复后可能采用产品默认值或下层继承值，不能假定两端结果相同。

## 撤销本次配置修改

`config restore receipt=/private/path/receipt.json out=/private/path/restored.json`
使用应用内保存的最近变更记录恢复本次涉及的字段，再对新回执运行 `verify`。
恢复要求同一运行实例且配置修订号未改变，避免覆盖用户之后的修改。
最近 32 次变更的恢复数据仅保存在宿主内存中，凭据不写入 CLI 回执；
应用重启或历史过期后不能用旧回执恢复，需根据当前状态重新制定配置。

## 外部编辑与离线配置

支持本能力的桌面应用会定期检查配置文件变化，并在处理配置请求前再次检查。修改文件后应用会重新校验、加载并刷新相关服务；非法 JSON 或字段值保留原运行配置，不覆盖坏文件。应用内写入不会无限触发重载。

优先用 `plan/apply`，它能覆盖设备设置、保密存储和并发校验。确需离线编辑时，必须明确关闭目标应用，然后使用 `get/explain/plan --offline` 和 `apply --offline`。离线只支持知识库层的普通配置；凭据、设备和全局配置需要运行宿主。离线 `get` 返回文件值，不能当成完整运行配置。

离线回执的 `state: saved` 只证明文件保存，应用运行状态为 `unverified`。启动应用后再查询和验证。对外部编辑，不使用等待固定秒数或截图存在作为生效证据。

## 凭据

不读取或输出密钥明文。运行时只暴露已配置状态，嵌套自定义模型和日历账户中的凭据也脱敏。通过 `secret-refs=/private/path/refs.json` 向 `plan` 提供引用：

```json
{ "gptApiKey": "env:MY_LIFEOS_OPENAI_KEY" }
```

也支持 `file:/absolute/private/file`，文件必须仅当前用户可访问。
自定义 AI 模型或日历账户列表等包含凭据的复合字段，通过同样的引用提供完整 JSON 数组。引用文件、计划、回执放在受保护的本地目录，不放进共享知识库、同步目录或 Git。授权账户、激活状态及运行时缓存由专用流程管理，通用配置接口不允许改写。

## 直接编辑文件后的校验

宿主运行期间每 500 ms 检查配置文件，查询时也会先检查一次。原子替换文件同样能被发现。写坏的 JSON 或不合法字段不会覆盖最后有效配置；修复文件后自动恢复。不要把 500 ms 理解为服务完成重建的时限。

直接编辑文件后无需伪造 apply 回执，可以校验预期有效值：

```bash
lifeos config verify target=aino-desktop key=themeMode 'expected="dark"' vault=/path/to/vault
lifeos config verify target=lifeos-pro key=periodicNotesPath 'expected="AI Journal"' vault=/path/to/vault
```

只有运行时状态正常且有效值等于预期时才返回 `verified: true`；返回的 `source` 说明实际来源。敏感字段用 apply 回执验证，不在命令行传明文秘密。宿主未运行、字段被另一层覆盖、服务更新失败时，不得告诉用户“实时生效”。

## 配置边界

生成目录覆盖 Pro 的 `PluginSettings` 和 Desktop 的 `ContextSettings` 全部字段。Desktop 独立保存的 WebDAV/S3 连接、Git 远程凭据和外部 MCP 服务器定义不属于这两个类型，不能写进 `.lifeos/settings.json`；当前 `config` 命令不会修改这些独立连接存储。相关功能开关、计划、提供商选择等以生成目录为准。遇到不在目录中的字段必须报告不支持，不能猜测存储位置或声称已配置。
