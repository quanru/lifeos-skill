<!-- Generated from code; do not edit. -->

# aino-desktop / tasks

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## taskStatuses

任务状态

- 存储层：vault；访问：write。
- 默认值：`[{"marker":" ","name":"Todo","type":"TODO","next":"x"},{"marker":"x","name":"Done","type":"DONE","next":" "}]`。
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
          "marker": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "type": {
            "enum": ["TODO", "IN_PROGRESS", "DONE", "CANCELLED"]
          },
          "next": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "color": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          },
          "icon": {
            "anyOf": [
              {
                "type": "string"
              }
            ]
          }
        },
        "required": ["marker", "name", "type"],
        "additionalProperties": false
      }
    }
  ]
}
```

## nextRecurringTaskOnNextLine

生成下一次循环任务时是否插入当前任务下一行。

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

## hideRemoteTasksInUnfinished

隐藏远程任务

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

## taskDelayDays

任务推迟操作默认延后的天数。

- 存储层：vault；访问：write。
- 默认值：`7`。
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
  "minimum": 0,
  "maximum": 3650
}
```

## taskFilterRules

任务筛选规则；用于控制查询和视图中纳入的任务。

- 存储层：vault；访问：write。
- 默认值：`{"headers":[],"paths":[],"tags":[],"contents":[],"mode":"exclude"}`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "headers": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "paths": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "contents": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "mode": {
          "enum": ["include", "exclude"]
        }
      },
      "required": ["headers", "paths", "tags", "contents", "mode"],
      "additionalProperties": false
    }
  ]
}
```

## taskFilterDateRange

任务筛选的日期范围。

- 存储层：vault；访问：write。
- 默认值：`{}`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "from": {
          "anyOf": [
            {
              "type": "string"
            }
          ]
        },
        "to": {
          "anyOf": [
            {
              "type": "string"
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

## useTaskDefaults

启用任务默认值

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

## taskDefaultTags

默认标签

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

## taskDefaultPriority

默认优先级

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

## taskDefaultDueDate

可以是 'none', 'today', 'tomorrow', 'day-after-tomorrow', 'next-week' 等

- 存储层：vault；访问：write。
- 默认值：`"none"`。
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

## taskDefaultStartDate

可以是 'none', 'today', 'tomorrow', 'day-after-tomorrow', 'next-week' 等

- 存储层：vault；访问：write。
- 默认值：`"none"`。
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

## taskDefaultStartTime

格式 'HH:mm' 或空字符串

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

## taskDefaultDuration

小时数

- 存储层：vault；访问：write。
- 默认值：`0.5`。
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
