<!-- Generated from code; do not edit. -->

# aino-desktop / files

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## draftsPath

闪念草稿的保存目录，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`"Drafts"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "string"
    }
  ]
}
```

## clipperSaveFolder

网页剪藏默认保存目录，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`"Clips"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "string"
    }
  ]
}
```

## clipperDefaultTags

网页剪藏默认添加的标签列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  ]
}
```

## clipperDefaultTemplateId

网页剪藏默认模板标识。

- 存储层：vault；访问：write。
- 默认值：`"article"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "string"
    }
  ]
}
```

## clipperTemplates

网页剪藏模板定义列表。

- 存储层：vault；访问：write。
- 默认值：`[{"id":"article","name":"Article","content":"{{#summary}}## AI 摘要\n\n{{summary}}\n\n{{/summary}}{{content}}","aiPrompt":"You summarize web pages for durable personal notes. Use the source language. Return Markdown only: first a concise 2-3 sentence overview, then 3-5 bullet points. Do not invent facts or repeat the title.","frontmatter":["domain","author","description","published"]},{"id":"digest","name":"Digest","content":"## 摘要\n\n{{summaryOrDescription}}\n\n## 原文\n\n{{content}}","aiPrompt":"Create a durable reading digest in the source language. Return Markdown only: a concise overview followed by 3-5 key insights. Preserve nuance, avoid invented facts, and do not repeat the title.","frontmatter":["domain","author","description","published"]},{"id":"bookmark","name":"Bookmark","content":"{{summaryOrDescription}}\n\n[打开原文]({{url}})","aiPrompt":"Summarize this bookmark in the source language. Return Markdown only: one concise paragraph and up to 3 short bullets explaining why it may be useful later.","frontmatter":["domain","author","description","published"]}]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "aiPrompt": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "frontmatter": {
            "type": "array",
            "items": {
              "enum": ["domain", "author", "description", "published"]
            }
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        },
        "required": ["aiPrompt", "content", "frontmatter", "id", "name"],
        "additionalProperties": false
      }
    }
  ]
}
```

## knowledgeExcludedFolders

知识检索排除的目录列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  ]
}
```

## newNoteLocation

新建笔记的默认位置策略。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["drafts", "root", "specified", "current"]
}
```

## newNoteCustomFolder

新建笔记使用自定义位置时的目标文件夹。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "string"
    }
  ]
}
```

## attachmentLocation

附件默认保存位置策略。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["root", "specified", "current", "subfolder"]
}
```

## attachmentSubfolderName

相对当前笔记保存附件时的子文件夹名称。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "string"
    }
  ]
}
```

## attachmentSpecifiedFolder

附件采用指定目录策略时的保存文件夹。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "string"
    }
  ]
}
```
