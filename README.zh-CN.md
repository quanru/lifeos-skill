# LifeOS Skill

[English](README.md) | [简体中文](README.zh-CN.md)

一个帮助 Agent 读取、整理和持续演进本地 Markdown 知识库的 LifeOS Skill。
它通过 `@life-os/cli` 无头运行，不需要先打开 Obsidian 或 Aino。

GitHub 发行版把最新的核心、今日、看板、接管和内容工作流合并成一个扁平 Skill，
以兼容更多导入器。LifeOS CLI 会把相同行为安装成五个聚焦的 Skill，让 Agent
每次只加载当前任务所需的领域能力。

## 在 LifeOS 中使用

- **在 Obsidian 里使用：** 阅读 [LifeOS Skill 使用指南](https://lifeos.md/zh/guide/ai-integration/lifeos-skill)。
- **在 Aino 里使用：** 阅读 [Aino LifeOS Skill 使用指南](https://aino.md/zh/guide/ai/lifeos-skill.html)。

## 能力

- 读取真实设置、搜索笔记、随手记录、管理任务，并按照用户自己的模板创建日记、周记、月记、季记和年记。
- 用本周完成的任务、未完成事项、周记内容和近期变动文件生成有来源依据的周复盘，不再用截止日期猜测完成情况。
- 从空文件夹搭建知识库，或接管已有 Markdown 文件夹；可选择 Memos、IPO / 纯主题模式、GTD 或 PARA，并在写入前预览全部变更。
- 在不同 LifeOS 模板之间分批、可恢复地迁移，同时保留自定义设置、链接、附件和用户编写的规则。
- 通过隐藏的同名元数据文件，为 PDF、图片、音视频、Office 文档等非 Markdown 附件添加标签和属性。
- 维护主题级 `.AI.md` LifeOS AI Wiki，并为项目、领域、资源等主题生成同目录、同名的独立 HTML Dashboard。
- 搭建知识库时创建 `AGENTS.md`、`SOUL.md` 和 `STYLE.md`；`MEMORY.md` 是可选的，只有用户明确要求 Agent 记住某件事时才创建或修改。
- 在 Aino Mobile 中使用需要确认的原生工具，不要求用户安装 Node.js 或执行 shell 命令。

## 安装

把完整的五 Skill Bundle 安装到当前 LifeOS Vault：

```bash
npx -y @life-os/cli@latest skill install
```

安装扁平的 GitHub Skill 包：

```bash
npx skills add quanru/lifeos-skill
```

在 Codex 项目内安装：

```bash
npx skills add quanru/lifeos-skill -a codex
```

## 试一试

直接用自然语言告诉 Agent：

```text
我今天有哪些 LifeOS 任务？
```

```text
根据本周完成的任务和最近修改的笔记，帮我做一次周复盘。
```

```text
帮我搭建或接管这个知识库。先展示计划，不要立即写入。
```

```text
给 Assets/合同.pdf 添加 #合同 标签，并把状态设为“已签署”。
```

```text
在季度规划项目笔记旁边生成一个 HTML Dashboard。
```

## 更新

使用 LifeOS CLI 检查并原子更新全部五个 Skill：

```bash
npx -y @life-os/cli skill status
npx -y @life-os/cli skill install
```

更新前会按 Skill 备份被本地修改过的受管文件；旧版单 Skill 安装会自动迁移，
过时的受管文件会在备份后清理，也不会把更高版本的 Bundle 降级。

## 要求

- 一个包含 Markdown 笔记的本地文件夹，或一个准备初始化的空文件夹
- CLI Agent 需要 Node.js 18+
- 通过 Aino Mobile 原生工具运行时不需要 Node.js

## 安全边界

搭建和迁移都会先检查、再预览。只有用户明确确认，并通过路径边界、重名、Markdown
链接、Wikilink 和附件引用检查后才会移动文件。除非其它工具实际提取了内容，否则
Skill 不会声称已经理解二进制附件正文。

## 许可证

MIT
