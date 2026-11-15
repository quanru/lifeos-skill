<!-- Generated from code; do not edit. -->

# aino-desktop / sync

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## syncMode

知识库同步模式。

- 存储层：vault；访问：write。
- 默认值：`"none"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["none", "webdav"]
}
```

## syncVaultId

知识库同步身份标识，由同步服务维护。

- 存储层：vault；访问：internal。
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

## syncProviderPreset

同步存储服务商预设。

- 存储层：vault；访问：write。
- 默认值：`"nextcloud"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [
    "nextcloud",
    "jianguoyun",
    "koofr",
    "infinicloud",
    "custom",
    "aliyun-oss",
    "cloudflare-r2",
    "tencent-cos",
    "cstcloud",
    "minio",
    "custom-s3"
  ]
}
```

## syncConflictPolicy

同步遇到冲突时采用的处理策略。

- 存储层：vault；访问：write。
- 默认值：`"auto-merge"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["auto-merge", "manual-copy", "latest-timestamp"]
}
```

## syncAutoOnLaunch

启动应用时是否自动同步。

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

## syncAutoOnForeground

应用回到前台时是否自动同步。

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

## syncAutoWhileActive

使用应用期间是否定时自动同步。

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

## syncActiveIntervalMinutes

应用活跃期间自动同步间隔，单位为分钟。

- 存储层：vault；访问：write。
- 默认值：`5`。
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
  "minimum": 1,
  "maximum": 1440
}
```

## enableGitBackup

是否启用本机 Git 备份。

- 存储层：device；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## gitBackupScheduleMode

Git 备份调度模式。

- 存储层：device；访问：write。
- 默认值：`"manual"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["custom", "manual", "hourly", "daily"]
}
```

## gitBackupCustomIntervalValue

Git 备份自定义间隔数值，与间隔单位共同使用。

- 存储层：device；访问：write。
- 默认值：`2`。
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

## gitBackupCustomIntervalUnit

Git 备份自定义间隔单位。

- 存储层：device；访问：write。
- 默认值：`"hours"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": ["minutes", "hours"]
}
```

## gitBackupDailyTime

每日 Git 备份执行时间，格式为 HH:mm。

- 存储层：device；访问：write。
- 默认值：`"20:00"`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "anyOf": [
    {
      "type": "string"
    }
  ],
  "pattern": "^([01]\\d|2[0-3]):[0-5]\\d$"
}
```

## gitBackupCatchUpOnLaunch

启动时是否补执行错过的 Git 备份。

- 存储层：device；访问：write。
- 默认值：`true`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## gitBackupSystemNotifications

是否显示 Git 备份系统通知。

- 存储层：device；访问：write。
- 默认值：`false`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```
