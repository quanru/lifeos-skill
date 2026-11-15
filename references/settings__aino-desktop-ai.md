<!-- Generated from code; do not edit. -->

# aino-desktop / ai

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## useGPT

是否启用 GPT AI 服务。

- 存储层：vault；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## gptApiKey

OpenAI访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## gptBaseURL

OpenAI服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.openai.com/v1"`。
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

## gptModel

OpenAI可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["gpt-4o-mini","gpt-4o"]`。
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

## useGemini

是否启用 Gemini AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## geminiApiKey

Gemini访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## geminiBaseURL

Gemini服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://generativelanguage.googleapis.com/v1beta/openai"`。
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

## geminiModel

Gemini可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["gemini-2.5-flash"]`。
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

## useClaude

是否启用 Claude AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## claudeApiKey

Claude访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## claudeBaseURL

Claude服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.anthropic.com/v1/"`。
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

## claudeAnthropicBaseURL

ClaudeAnthropic 兼容协议服务地址。

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

## claudeOpenaiBaseURL

ClaudeOpenAI 兼容协议服务地址。

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

## claudeModel

Claude可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["claude-sonnet-4-20250514"]`。
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

## useDeepSeek

是否启用 DeepSeek AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## deepseekApiKey

DeepSeek访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## deepseekBaseURL

DeepSeek服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.deepseek.com/v1"`。
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

## deepseekAnthropicBaseURL

DeepSeekAnthropic 兼容协议服务地址。

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

## deepseekOpenaiBaseURL

DeepSeekOpenAI 兼容协议服务地址。

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

## deepseekModel

DeepSeek可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["deepseek-chat"]`。
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

## useQwen

是否启用 Qwen AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## qwenApiKey

Qwen访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## qwenBaseURL

Qwen服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://dashscope.aliyuncs.com/compatible-mode/v1"`。
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

## qwenAnthropicBaseURL

QwenAnthropic 兼容协议服务地址。

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

## qwenOpenaiBaseURL

QwenOpenAI 兼容协议服务地址。

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

## qwenModel

Qwen可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["qwen-plus"]`。
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

## useOllama

是否启用 Ollama AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## ollamaApiKey

Ollama访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## ollamaBaseURL

Ollama服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"http://localhost:11434/v1"`。
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

## ollamaModel

Ollama可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["llama3.2"]`。
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

## useMinimax

是否启用 Minimax AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## minimaxApiKey

MiniMax访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## minimaxBaseURL

MiniMax服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.minimaxi.com/v1"`。
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

## minimaxAnthropicBaseURL

MiniMaxAnthropic 兼容协议服务地址。

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

## minimaxOpenaiBaseURL

MiniMaxOpenAI 兼容协议服务地址。

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

## minimaxModel

MiniMax可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["MiniMax-M2.7"]`。
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

## useZhipu

是否启用 Zhipu AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## zhipuApiKey

智谱访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## zhipuBaseURL

智谱服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://open.bigmodel.cn/api/paas/v4"`。
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

## zhipuAnthropicBaseURL

智谱Anthropic 兼容协议服务地址。

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

## zhipuOpenaiBaseURL

智谱OpenAI 兼容协议服务地址。

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

## zhipuModel

智谱可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["glm-4-plus"]`。
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

## useKimi

是否启用 Kimi AI 服务。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## kimiApiKey

Kimi访问密钥。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## kimiBaseURL

Kimi服务基础地址。

- 存储层：vault；访问：write。
- 默认值：`"https://api.moonshot.cn/v1"`。
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

## kimiAnthropicBaseURL

KimiAnthropic 兼容协议服务地址。

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

## kimiOpenaiBaseURL

KimiOpenAI 兼容协议服务地址。

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

## kimiModel

Kimi可选模型列表。

- 存储层：vault；访问：write。
- 默认值：`["moonshot-v1-auto"]`。
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

## useCustom

启用自定义 AI 服务。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## customApiKey

旧版自定义 AI 服务访问凭据。

- 存储层：secret；访问：secret。
- 默认值：敏感值不展示。
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

## customBaseURL

旧版自定义 AI 服务端点。

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

## customModel

自定义

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
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

## customAIModels

自定义 AI 模型配置列表，包含服务端点、模型和访问凭据。

- 存储层：vault；访问：secret。
- 默认值：敏感值不展示。
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
  ]
}
```

## useClaudeCode

启用本机 Claude Code 作为 AI 运行方式。

- 存储层：device；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## claudeCodeBinaryPath

本机 Claude Code 可执行文件路径。

- 存储层：device；访问：write。
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

## useCodex

启用本机 Codex 作为 AI 运行方式。

- 存储层：device；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## codexBinaryPath

本机 Codex 可执行文件路径。

- 存储层：device；访问：write。
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

## codexHomePath

本机 Codex 配置目录。

- 存储层：device；访问：write。
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

## codexApprovalMode

Codex 执行操作时采用的审批模式。

- 存储层：device；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["untrusted", "on-request", "never"]
}
```

## defaultVendor

新 AI 对话默认使用的服务商。

- 存储层：vault；访问：write。
- 默认值：`"claude"`。
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

## defaultModel

新 AI 对话默认使用的模型标识。

- 存储层：vault；访问：write。
- 默认值：`""`。
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

## aiMaxConversationTurns

最大对话轮数

- 存储层：vault；访问：write。
- 默认值：`10`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "number"
    }
  ]
}
```

## aiEnableExternalSkills

普通 AI 模型是否可读取 / 调用外部 agent skills

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

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
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

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
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

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
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## aiAllowCommandTools

是否允许 AI 使用命令执行工具。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## aiEnableExperimentalPageControl

是否开放实验性 AI 页面操作能力。

- 存储层：vault；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## chatExportFolder

聊天导出文件夹路径

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

## promptsPath

Prompt 文件夹路径

- 存储层：vault；访问：write。
- 默认值：`"Prompts"`。
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

## aiAdvancedForLifeOS

启用 LifeOS AI 高级检索配置。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## aiFilterPaths

AI 知识检索的路径筛选配置。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
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
