<!-- Generated from code; do not edit. -->

# lifeos-pro / calendar

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## useCalendar

显示 LifeOS 日历视图；本地任务数据服务仍可独立运行。

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

## useCalendarSidebar

日历侧栏

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

## useCalendarAllDay

显示为全天事件

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

## useCalendarCollapse

收件箱折叠

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

## useCalendar24Hour

24小时制

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

## useCalendarSimpleTaskDisplay

简化任务显示

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

## calendarTimeGridHeight

时间格高度

- 存储层：vault；访问：write。
- 默认值：`"default"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": ["compact", "default", "comfortable"]
}
```

## useICSCalendar

ICS 日历订阅

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

## icsCalendarURL

ICS 日历地址

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

## customICSConfigs

自定义 ICS 订阅列表，含订阅地址、名称及启用状态；地址可能含访问凭据。

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
      "url": {
        "type": "string"
      }
    },
    "required": ["id", "name", "url"],
    "additionalProperties": false
  }
}
```

## hiddenRemoteCalendarUrls

在视图中隐藏的远程日历地址列表。

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

## useCalDavCalendar

CalDAV 日历订阅

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

## calDAVServerURL

服务器地址

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

## calDAVUsername

用户名

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

## calDAVPassword

密码

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

## calDAVSelectedCalendar

基础 CalDAV 配置选择的日历

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

## calDAVAvailableCalendars

基础 CalDAV 配置的可用日历列表

- 存储层：vault；访问：internal。
- 默认值：`[]`。
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
      "url": {
        "type": "string"
      },
      "description": {
        "anyOf": [
          {
            "type": "string"
          }
        ]
      },
      "isReadOnly": {
        "enum": [false, true]
      }
    },
    "required": ["id", "name", "url"],
    "additionalProperties": false
  }
}
```

## customCalDAVConfigs

自定义 CalDAV 账户配置列表，包含服务器、用户名、密码及所选日历。

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
      "serverURL": {
        "type": "string"
      },
      "username": {
        "type": "string"
      },
      "password": {
        "type": "string"
      },
      "selectedCalendar": {
        "anyOf": [
          {
            "type": "string"
          }
        ]
      },
      "availableCalendars": {
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
                "url": {
                  "type": "string"
                },
                "description": {
                  "anyOf": [
                    {
                      "type": "string"
                    }
                  ]
                },
                "isReadOnly": {
                  "enum": [false, true]
                }
              },
              "required": ["id", "name", "url"],
              "additionalProperties": false
            }
          }
        ]
      },
      "enabled": {
        "enum": [false, true]
      }
    },
    "required": ["id", "name", "serverURL", "username", "password"],
    "additionalProperties": false
  }
}
```

## useICloudCalendar

iCloud 日历订阅

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

## iCloudCalendarPushEnabled

是否启用推送功能，false时仅拉取远程任务

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

## iCloudDeleteCompletedTask

是否删除已完成和已取消的任务，true时删除

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

## iCloudServerURL

iCloud CalDAV 服务地址。

- 存储层：vault；访问：write。
- 默认值：`"caldav.icloud.com"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## iCloudUsername

iCloud 日历账户用户名。

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

## iCloudPassword

iCloud 日历的应用专用密码。

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

## iCloudSelectedCalendar

用户选择的同步日历ID

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

## iCloudAvailableCalendars

可用的日历列表

- 存储层：vault；访问：internal。
- 默认值：`[]`。
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
      "url": {
        "type": "string"
      },
      "description": {
        "anyOf": [
          {
            "type": "string"
          }
        ]
      },
      "isReadOnly": {
        "enum": [false, true]
      }
    },
    "required": ["id", "name", "url"],
    "additionalProperties": false
  }
}
```

## iCloudAllDayReminder

是否为全天事件添加提醒

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

## iCloudAllDayReminderDays

提前天数，0表示当天

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

## iCloudAllDayReminderTime

提醒时间，格式 'HH:mm'

- 存储层：vault；访问：write。
- 默认值：`"09:00"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## iCloudTimedReminder

是否为有时间的任务添加提醒

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

## iCloudTimedReminderValue

提醒数值

- 存储层：vault；访问：write。
- 默认值：`15`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## iCloudTimedReminderUnit

提醒单位

- 存储层：vault；访问：write。
- 默认值：`"minutes"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": ["minutes", "hours", "days", "weeks"]
}
```

## useGoogleCalendar

是否启用 Google Calendar

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

## googleClientId

Google OAuth Client ID（用户自行提供）

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

## googleClientSecret

Google OAuth Client Secret（用户自行提供）

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

## googleCalendarAccessToken

OAuth Access Token

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

## googleCalendarRefreshToken

OAuth Refresh Token（用于刷新 Access Token）

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

## googleCalendarTokenExpiry

Token 过期时间戳

- 存储层：vault；访问：internal。
- 默认值：`0`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## googleCalendarSelectedCalendarId

用户选择的同步日历 ID

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

## googleCalendarAvailableCalendars

可用的日历列表

- 存储层：vault；访问：internal。
- 默认值：`[]`。
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
      "url": {
        "type": "string"
      },
      "description": {
        "anyOf": [
          {
            "type": "string"
          }
        ]
      },
      "isReadOnly": {
        "enum": [false, true]
      }
    },
    "required": ["id", "name", "url"],
    "additionalProperties": false
  }
}
```

## googleOAuthState

OAuth state 参数（用于 CSRF 防护）

- 存储层：vault；访问：write。
- 默认值：未显式设置，由宿主或功能按需解析。
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

## googleCalendarPushEnabled

是否启用推送功能，false 时仅拉取远程任务

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

## googleCalendarDeleteCompletedTask

是否删除已完成和已取消的任务

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

## googleCalendarAllDayReminder

是否为全天事件添加提醒

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

## googleCalendarAllDayReminderDays

提前天数，0表示当天

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

## googleCalendarAllDayReminderTime

提醒时间，格式 'HH:mm'

- 存储层：vault；访问：write。
- 默认值：`"09:00"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## googleCalendarTimedReminder

是否为有时间的任务添加提醒

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

## googleCalendarTimedReminderValue

提醒数值

- 存储层：vault；访问：write。
- 默认值：`15`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## googleCalendarTimedReminderUnit

提醒单位

- 存储层：vault；访问：write。
- 默认值：`"minutes"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "enum": ["minutes", "hours", "days", "weeks"]
}
```

## defaultWriteCalendar

任务同步时默认写入的日历：'none' | 'icloud' | 'google' | 'caldav-{configId}'

- 存储层：vault；访问：write。
- 默认值：`"none"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## calendarNewTaskFile

新建任务所在文件

- 存储层：vault；访问：write。
- 默认值：`"Task.md"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "string"
}
```

## pomodoroDuration

番茄时长（分钟）

- 存储层：vault；访问：write。
- 默认值：`25`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## shortBreakDuration

短休息时长（分钟）

- 存储层：vault；访问：write。
- 默认值：`5`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## longBreakDuration

长休息时长（分钟）

- 存储层：vault；访问：write。
- 默认值：`15`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## longBreakInterval

长休息间隔番茄数

- 存储层：vault；访问：write。
- 默认值：`4`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`packages/type/src/main.ts`；默认值：`apps/obsidian-plugin/src/settings/defaults.ts`。

校验结构：

```json
{
  "type": "number"
}
```

## autoStartNextPomodoro

自动开始下个番茄

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

## autoStartBreak

自动休息

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

## pomodoroSound

番茄提示音

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

## pomodoroAutoRecord

是否自动记录到 Daily Note

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
