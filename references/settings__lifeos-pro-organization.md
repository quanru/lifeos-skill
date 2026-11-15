<!-- Generated from code; do not edit. -->

# lifeos-pro / organization

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## inputsPath

输入笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## outputsPath

输出笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## themesPath

主题笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## themesTemplateFilePath

创建主题笔记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## capturesPath

捕获笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## capturesTemplateFilePath

创建捕获笔记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## expressesPath

表达笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## expressesTemplateFilePath

创建表达笔记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## projectsPath

项目笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`"1. Projects"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## projectsTemplateFilePath

创建项目笔记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## areasPath

领域笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`"2. Areas"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## areasTemplateFilePath

创建领域笔记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## resourcesPath

资源笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`"3. Resources"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## resourcesTemplateFilePath

创建资源笔记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## archivesPath

归档笔记目录，相对于当前知识库；修改不会搬迁已有文件。

- 存储层：vault；访问：write。
- 默认值：`"4. Archives"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## archivesTemplateFilePath

创建归档笔记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## useThemeNotes

启用主题笔记组织模式。

- 存储层：vault；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## usePARANotes

启用 Projects、Areas、Resources、Archives 组织模式。

- 存储层：vault；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## usePARAAdvanced

启用 PARA 高级配置。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## useThemeAdvanced

启用主题笔记高级配置。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## themeIndexFilename

主题文件夹的索引笔记命名方式。

- 存储层：vault；访问：write。
- 默认值：`"readme"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": ["readme", "folderName"]
}
```

## useThemeNoteReveal

跳转索引

- 存储层：vault；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## useThemeSearch

主题搜索

- 存储层：vault；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## aiThemeFileSearchType

AI 检索主题相关文件时的搜索范围模式。

- 存储层：vault；访问：write。
- 默认值：`"entire_folder"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## aiRecursiveSubThemeSearch

AI 检索是否递归包含子主题。

- 存储层：vault；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## useThemeFolderSync

是否启用主题文件与文件夹名称同步

- 存储层：vault；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```
