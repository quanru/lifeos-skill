<!-- Generated from code; do not edit. -->

# lifeos-pro / general

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## voiceConversationEnabled

DeepAsk 桌面语音对答实验开关，默认关闭；关闭会停止当前录音、播放和语音问答。

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

## voiceProvider

DeepAsk 语音识别与朗读供应商；对应 API Key 仅在本设备单独配置，不随库同步。

- 存储层：vault；访问：write。
- 默认值：`"doubao"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": ["doubao", "deepgram"]
}
```

## doubaoVoiceSpeaker

DeepAsk 豆包语音合成音色 ID；需在用户自己的火山引擎账户中具有使用权限。

- 存储层：vault；访问：write。
- 默认值：`"zh_female_vv_uranus_bigtts"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

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

## lifeOSRibbonMode

LifeOS 功能入口：九宫格（精简 Ribbon）、竖栏快捷方式或两者都显示；保留现有默认。

- 存储层：vault；访问：write。
- 默认值：`"all"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": ["compact", "ribbon", "all"]
}
```

## lifeOSSidebarSingleTab

电脑端将九宫格与内容复用在同一个侧栏标签页。

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

## lifeOSLauncherItems

LifeOS 九宫格常用入口；其他可用入口通过更多功能展开。

- 存储层：vault；访问：write。
- 默认值：`["home","calendar","quick-capture","filetree","tags","search","periodic","para"]`。
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

## lifeOSLauncherOrder

LifeOS 九宫格入口顺序；未记录的新入口追加在末尾。

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

## lifeOSLauncherHiddenItems

LifeOS 九宫格完全隐藏的入口，不出现在更多功能中。

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

## accountName

产品授权账户邮箱。

- 存储层：vault；访问：internal。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## accountActivationCode

产品激活凭据；由授权流程管理，不通过通用配置接口修改。

- 存储层：vault；访问：internal。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## pluginUpdateChannel

LifeOS Pro 插件更新通道。

- 存储层：vault；访问：write。
- 默认值：`"stable"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": ["stable", "beta"]
}
```

## usePeriodicAdvanced

启用周期笔记高级路径格式和模板设置。

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

## projectListHeader

项目列表标题：

- 存储层：vault；访问：write。
- 默认值：`"Project List"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## areaListHeader

领域列表标题：

- 存储层：vault；访问：write。
- 默认值：`"First Things Dimension"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## useDailyRecord

日常记录同步

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

## usePeriodicNotes

启用周期笔记功能。

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

## useHabitStats

习惯统计

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

## showDailyNoteTitle

显示日记文件标题

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

## paraIndexFilename

PARA 文件夹的索引笔记命名方式。

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

## useDailyRecordTimestamp

时间戳前缀：

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

## useDailyRecordFocus

日常记录光标聚焦：

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

## useFileTreeReveal

文件位置自动展开：

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

## useCompactNoteCreate

紧凑模式

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

## hideNoteTypeToggle

隐藏笔记类型切换

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

## templateSyntaxMigrationNoticeDismissed

是否已关闭旧模板语法迁移提示。

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

## dismissedRecommendations

用户点击「不再推荐」后隐藏的产品推荐 id 列表

- 存储层：vault；访问：write。
- 默认值：`[]`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

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

## deepAskFontSize

DeepAsk 字体大小覆盖，0 表示跟随 Obsidian

- 存储层：vault；访问：write。
- 默认值：`0`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## systemPromptContent

系统提示词内容

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

## useFilePropertiesTagMatching

是否包含文件properties中包含指定tags的bullets和tasks

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

## fourQuadrantFilters

四象限视图的筛选配置

- 存储层：vault；访问：write。
- 默认值：`undefined`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "overdueDays": {
            "anyOf": [
              {
                "type": "number"
              }
            ]
          },
          "futureStartDays": {
            "anyOf": [
              {
                "type": "number"
              }
            ]
          },
          "futureDays": {
            "anyOf": [
              {
                "type": "number"
              }
            ]
          },
          "includeNoDate": {
            "enum": [false, true]
          },
          "includeAllOverdue": {
            "enum": [false, true]
          },
          "includeAllFuture": {
            "enum": [false, true]
          },
          "priorities": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "taskSources": {
            "anyOf": [
              {
                "type": "array",
                "items": {
                  "enum": ["local", "icloud", "ics", "caldav", "google"]
                }
              }
            ]
          }
        },
        "required": ["priorities"],
        "additionalProperties": false
      }
    }
  ]
}
```

## fourQuadrantRules

四象限版本化归类规则

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "version": {
          "enum": [2]
        },
        "mode": {
          "enum": ["time-priority", "priority-only"]
        },
        "urgentFutureDays": {
          "type": "number"
        },
        "importantPriorities": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "priorityQuadrants": {
          "type": "array",
          "prefixItems": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          ],
          "minItems": 4,
          "maxItems": 4
        },
        "preserveLegacyFilters": {
          "enum": [false, true]
        }
      },
      "required": [
        "version",
        "mode",
        "urgentFutureDays",
        "importantPriorities",
        "priorityQuadrants",
        "preserveLegacyFilters"
      ],
      "additionalProperties": false
    }
  ]
}
```

## quadrantDropConfigs

四象限拖拽配置（优先级+日期）

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "priorityEmoji": {
            "type": "string"
          },
          "daysOffset": {
            "anyOf": [
              {
                "type": "number"
              }
            ]
          },
          "clearDate": {
            "enum": [false, true]
          }
        },
        "required": ["priorityEmoji"],
        "additionalProperties": false
      }
    }
  ]
}
```

## tableCellMaxLines

表格单元格最大显示行数,0表示不限制

- 存储层：vault；访问：write。
- 默认值：`0`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## autoFocusCount

自动番茄专注次数，0 表示无限

- 存储层：vault；访问：write。
- 默认值：`0`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## continueAfterComplete

倒计时结束后继续计时，直到手动停止

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

## useTagColor

是否启用标签颜色区分

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

## tagColors

自定义标签颜色映射 { "#tag": "#color" }

- 存储层：vault；访问：write。
- 默认值：`{}`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": {
    "type": "string"
  }
}
```

## useHTTPServer

是否启用 HTTP Server（MCP 协议）

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

## httpServerPort

HTTP Server 端口号（默认 1479）

- 存储层：vault；访问：write。
- 默认值：`1478`。
- 生效：更新本机 HTTP/MCP 服务并等待重启完成。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number",
  "minimum": 1024,
  "maximum": 65535
}
```

## enableDebugLog

是否启用调试日志（写入 .lifeos-debug.log 文件）

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

## locale

用户选择的语言，空字符串表示跟随 Obsidian 设置

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
