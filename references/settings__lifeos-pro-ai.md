<!-- Generated from code; do not edit. -->

# lifeos-pro / ai

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## aiApiKey

API Key

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## aiBaseURL

API Base URL

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

## aiModel

AI 模型

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

## aiMaxConversationTurns

最大对话轮数

- 存储层：vault；访问：write。
- 默认值：`10`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## aiTemperature

温度

- 存储层：vault；访问：write。
- 默认值：`0.7`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## aiEnableSkills

兼容旧设置：内置 agent skills 对普通 AI 模型始终启用

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

## aiEnableMcpTools

兼容旧设置：内置 MCP 工具对普通 AI 模型始终启用

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

## aiEnableExternalSkills

普通 AI 模型是否可读取 / 调用外部 agent skills

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

## aiEnableExternalMcpTools

普通 AI 模型是否可连接外部 MCP server（桌面端）

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

## aiEnableObsidianInterfaceTools

Obsidian 桌面实验性界面工具；默认关闭且每次操作仍需确认

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

## aiAllowWriteTools

是否允许普通 AI 模型调用写入 / 更新类工具

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

## aiAllowDeleteTools

是否允许普通 AI 模型调用删除类工具

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

## aiMaxToolIterations

单次 AI 请求允许的最大工具调用迭代次数。

- 存储层：vault；访问：write。
- 默认值：`8`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number",
  "minimum": 1,
  "maximum": 100
}
```

## aiFilterPaths

AI 知识检索的路径筛选配置。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## aiAdvancedForLifeOS

启用 LifeOS AI 高级检索配置。

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

## aiUseCurrentFileOnly

仅使用当前正在查看的文件

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

## useGPT

是否启用 GPT AI 服务。

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

## gptBaseURL

OpenAI服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.openai.com/v1/"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## gptApiKey

OpenAI访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## gptModel

OpenAI可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useDeepSeek

是否启用 DeepSeek AI 服务。

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

## deepseekBaseURL

DeepSeek服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.deepseek.com/v1"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## deepseekAnthropicBaseURL

DeepSeekAnthropic 兼容协议服务地址。

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

## deepseekOpenaiBaseURL

DeepSeekOpenAI 兼容协议服务地址。

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

## deepseekApiKey

DeepSeek访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## deepseekModel

DeepSeek可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useGemini

是否启用 Gemini AI 服务。

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

## geminiBaseURL

Gemini服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://generativelanguage.googleapis.com/v1beta/openai/"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## geminiApiKey

Gemini访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## geminiModel

Gemini可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useQwen

是否启用 Qwen AI 服务。

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

## qwenBaseURL

Qwen服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://dashscope.aliyuncs.com/compatible-mode/v1"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## qwenAnthropicBaseURL

QwenAnthropic 兼容协议服务地址。

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

## qwenOpenaiBaseURL

QwenOpenAI 兼容协议服务地址。

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

## qwenApiKey

Qwen访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## qwenModel

Qwen可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useMinimax

是否启用 Minimax AI 服务。

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

## minimaxBaseURL

MiniMax服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.minimaxi.com/v1"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## minimaxAnthropicBaseURL

MiniMaxAnthropic 兼容协议服务地址。

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

## minimaxOpenaiBaseURL

MiniMaxOpenAI 兼容协议服务地址。

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

## minimaxApiKey

MiniMax访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## minimaxModel

MiniMax可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useZhipu

是否启用 Zhipu AI 服务。

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

## zhipuBaseURL

智谱服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://open.bigmodel.cn/api/paas/v4"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## zhipuAnthropicBaseURL

智谱Anthropic 兼容协议服务地址。

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

## zhipuOpenaiBaseURL

智谱OpenAI 兼容协议服务地址。

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

## zhipuApiKey

智谱访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## zhipuModel

智谱可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useOllama

是否启用 Ollama AI 服务。

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

## ollamaBaseURL

Ollama服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"http://localhost:11434/v1"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## ollamaApiKey

Ollama访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## ollamaModel

Ollama可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useKimi

是否启用 Kimi AI 服务。

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

## kimiBaseURL

Kimi服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.moonshot.cn/v1"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## kimiAnthropicBaseURL

KimiAnthropic 兼容协议服务地址。

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

## kimiOpenaiBaseURL

KimiOpenAI 兼容协议服务地址。

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

## kimiApiKey

Kimi访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## kimiModel

Kimi可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useClaude

是否启用 Claude AI 服务。

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

## claudeBaseURL

Claude服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.anthropic.com/v1"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## claudeAnthropicBaseURL

ClaudeAnthropic 兼容协议服务地址。

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

## claudeOpenaiBaseURL

ClaudeOpenAI 兼容协议服务地址。

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

## claudeApiKey

Claude访问密钥。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## claudeModel

Claude可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

## useClaudeCode

启用本机 Claude Code 作为 AI 运行方式。

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

## claudeCodeBinaryPath

本机 Claude Code 可执行文件路径。

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

## useCodex

启用本机 Codex 作为 AI 运行方式。

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

## codexBinaryPath

本机 Codex 可执行文件路径。

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

## customAIModels

自定义 AI 模型配置列表，包含服务端点、模型和访问凭据。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "apiKey": {
        "type": "string"
      },
      "baseURL": {
        "type": "string"
      },
      "model": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "sdkType": {
        "enum": ["anthropic", "openai"]
      }
    },
    "required": ["id", "name", "apiKey", "baseURL", "model"],
    "additionalProperties": false
  }
}
```

## chatExportFolder

聊天导出文件夹路径

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

## promptsPath

Prompt 文件夹路径

- 存储层：vault；访问：write。
- 默认值：`"Prompts"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## useCustomSystemPrompt

是否使用自定义系统提示词

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

## aiPreserveSelectedText

是否保留选中的文件和标签文本格式

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

## aiPreserveThoughts

是否保留 AI 的思考过程

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
