<!-- Generated from code; do not edit. -->

# aino-desktop / appearance

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## themeListHeader

主题列表标题：

- 存储层：vault；访问：write。
- 默认值：`"Theme List"`。
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

## themePresetId

外观主题预设标识。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [
    "aino",
    "ocean",
    "forest",
    "sunset",
    "dawn",
    "minimal",
    "aino-dark",
    "ocean-dark",
    "forest-dark",
    "ember-dark",
    "midnight",
    "minimal-dark"
  ]
}
```

## themeLightPresetId

浅色模式主题预设标识。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["aino", "ocean", "forest", "sunset", "dawn", "minimal"]
}
```

## themeDarkPresetId

深色模式主题预设标识。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["aino-dark", "ocean-dark", "forest-dark", "ember-dark", "midnight", "minimal-dark"]
}
```

## themeMode

应用配色模式：跟随系统、浅色或深色。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["system", "light", "dark"]
}
```

## themeAccentColor

主题主强调色。

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

## themeGradientEnabled

是否启用主题渐变色。

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

## themeAccentSecondaryColor

主题第二强调色。

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

## themeAccentTertiaryColor

主题第三强调色。

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

## themeBackgroundColor

应用背景色覆盖值。

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

## themeEditorBackgroundColor

编辑器背景色覆盖值。

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

## themeMarkdownBoldColor

Markdown 粗体文字颜色覆盖值。

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

## themeTokenOverrides

按浅色和深色模式分别覆盖主题色彩变量。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "light": {
          "anyOf": [
            {
              "type": "object",
              "properties": {},
              "required": [],
              "additionalProperties": {
                "type": "string"
              }
            }
          ]
        },
        "dark": {
          "anyOf": [
            {
              "type": "object",
              "properties": {},
              "required": [],
              "additionalProperties": {
                "type": "string"
              }
            }
          ]
        }
      },
      "required": [],
      "additionalProperties": false
    }
  ]
}
```

## themeCustomName

自定义主题名称。

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

## themeCustomAuthor

自定义主题作者。

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

## limitLineWidth

是否限制编辑区正文行宽。

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

## editorDensity

编辑器内容密度。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["compact", "default"]
}
```

## headingFoldingEnabled

是否允许折叠标题下的内容。

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

## paragraphFoldingEnabled

是否允许段落折叠。

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

## sidebarTranslucencyEnabled

是否启用侧边栏半透明效果。

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

## appearanceFontFamily

应用使用的字体族。

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

## editorFontFamily

笔记编辑区独立字体；未设置时沿用现有字体。

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

## editorFontFileName

编辑区导入字体文件的名称。

- 存储层：device；访问：internal。
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

## editorFontFileDataUrl

编辑区导入字体文件的内容。

- 存储层：device；访问：internal。
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

## appearanceFontFileName

已导入字体文件的名称，由字体导入流程维护。

- 存储层：device；访问：internal。
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

## appearanceFontFileDataUrl

已导入字体文件内容，由字体导入流程维护。

- 存储层：device；访问：internal。
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

## appearanceFontSize

应用基础字体大小。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "number"
    }
  ],
  "minimum": 8,
  "maximum": 72
}
```

## appearanceZoomPercent

应用界面缩放百分比。

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "number"
    }
  ],
  "minimum": 50,
  "maximum": 200
}
```

## pinnedItems

置顶项目列表。

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
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "icon": {
            "type": "string"
          },
          "type": {
            "enum": ["note", "url"]
          },
          "path": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "url": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          }
        },
        "required": ["id", "title", "icon", "type"],
        "additionalProperties": false
      }
    }
  ]
}
```

## sidebarItems

侧边栏项目配置和顺序。

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
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "icon": {
            "type": "string"
          },
          "customIcon": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "label": {
            "type": "string"
          },
          "type": {
            "enum": [
              "view",
              "tool",
              "sidebar",
              "custom-app",
              "pinned-file",
              "pinned-directory",
              "pinned-note",
              "pinned-url",
              "read-later-note",
              "read-later-url",
              "stack",
              "folder"
            ]
          },
          "area": {
            "enum": ["icons", "pinned", "read-later"]
          },
          "path": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "url": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "appId": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "hidden": {
            "enum": [false, true]
          },
          "faviconUrl": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "children": {
            "$ref": "#/$defs/type0"
          },
          "stackActiveId": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          }
        },
        "required": ["id", "icon", "label", "type", "area"],
        "additionalProperties": false
      }
    }
  ],
  "$defs": {
    "type0": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "icon": {
                "type": "string"
              },
              "customIcon": {
                "anyOf": [
                  {
                    "type": "string"
                  }
                ]
              },
              "label": {
                "type": "string"
              },
              "type": {
                "enum": [
                  "view",
                  "tool",
                  "sidebar",
                  "custom-app",
                  "pinned-file",
                  "pinned-directory",
                  "pinned-note",
                  "pinned-url",
                  "read-later-note",
                  "read-later-url",
                  "stack",
                  "folder"
                ]
              },
              "area": {
                "enum": ["icons", "pinned", "read-later"]
              },
              "path": {
                "anyOf": [
                  {
                    "type": "string"
                  }
                ]
              },
              "url": {
                "anyOf": [
                  {
                    "type": "string"
                  }
                ]
              },
              "appId": {
                "anyOf": [
                  {
                    "type": "string"
                  }
                ]
              },
              "hidden": {
                "enum": [false, true]
              },
              "faviconUrl": {
                "anyOf": [
                  {
                    "type": "string"
                  }
                ]
              },
              "children": {
                "$ref": "#/$defs/type0"
              },
              "stackActiveId": {
                "anyOf": [
                  {
                    "type": "string"
                  }
                ]
              }
            },
            "required": ["id", "icon", "label", "type", "area"],
            "additionalProperties": false
          }
        }
      ]
    }
  }
}
```

## sidebarItemsSchemaVersion

侧边栏项目存储结构版本，由迁移流程维护。

- 存储层：vault；访问：internal。
- 默认值：未显式设置，由宿主或功能按需解析。
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

## sidebarSectionOrder

侧边栏分区显示顺序。

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
        "enum": ["read-later", "favorite", "folders", "ai", "drafts", "recent"]
      }
    }
  ]
}
```

## sidebarSectionCollapsed

侧边栏各分区的折叠状态。

- 存储层：device；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "favorite": {
          "enum": [false, true]
        },
        "ai": {
          "enum": [false, true]
        },
        "drafts": {
          "enum": [false, true]
        },
        "recent": {
          "enum": [false, true]
        },
        "folders": {
          "enum": [false, true]
        },
        "readLater": {
          "enum": [false, true]
        }
      },
      "required": [],
      "additionalProperties": false
    }
  ]
}
```

## rightSidebarMode

右侧栏当前显示模式。

- 存储层：device；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["context", "chat", "tasks"]
}
```

## leftSidebarCollapsed

左侧栏是否折叠。

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

## rightSidebarCollapsed

右侧栏是否折叠。

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

## sidebarWidth

左侧栏宽度。

- 存储层：device；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
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

## contextPanelWidth

右侧上下文面板宽度。

- 存储层：device；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
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
