<!-- Generated from code; do not edit. -->

# aino-desktop / periodic

配置契约：`a8d4bbff2dcf589348ac10baa32789e5aae4f93d2bd8a00e64523cb9d7481ba5`。运行时来源和生效状态请用 `config explain` / `config verify` 查询。

## weekStart

每周第一天：-1 跟随语言习惯，0 为周日，1 为周一，依次至 6 为周六。

- 存储层：vault；访问：write。
- 默认值：`-1`。
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
  "minimum": -1,
  "maximum": 6
}
```

## periodicNotesPath

周期笔记的根目录，相对于当前知识库；修改只改变后续路径解析，不搬迁已有笔记。

- 存储层：vault；访问：write。
- 默认值：`"PeriodicNotes"`。
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

## dailyRecordHeader

日常记录标题：

- 存储层：vault；访问：write。
- 默认值：`"Daily Record"`。
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

## dailyRecordAPI

每日记录服务的 API 地址。

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

## dailyRecordToken

每日记录服务访问凭据。

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

## dailyRecordTag

记录标签：

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

## dailyRecordWarning

每日记录流程的警告状态，由运行时维护。

- 存储层：vault；访问：internal。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## dailyRecordCreating

每日记录创建中状态，由运行时维护。

- 存储层：vault；访问：internal。
- 默认值：未显式设置，由宿主或功能按需解析。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。

校验结构：

```json
{
  "enum": [false, true]
}
```

## habitHeader

习惯打卡标题：

- 存储层：vault；访问：write。
- 默认值：`"Habit"`。
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

## useChineseCalendar

中国农历：

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

## periodicNotesTemplateFilePathDaily

创建日记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesTemplateFilePathWeekly

创建周记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesTemplateFilePathMonthly

创建月记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesTemplateFilePathQuarterly

创建季记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesTemplateFilePathYearly

创建年记时使用的模板文件路径，相对于知识库。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesPathFormatDaily

日记的日期路径格式；空值使用宿主默认格式。修改不重命名已有笔记。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesPathFormatWeekly

周记的日期路径格式；空值使用宿主默认格式。修改不重命名已有笔记。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesPathFormatMonthly

月记的日期路径格式；空值使用宿主默认格式。修改不重命名已有笔记。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesPathFormatQuarterly

季记的日期路径格式；空值使用宿主默认格式。修改不重命名已有笔记。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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

## periodicNotesPathFormatYearly

年记的日期路径格式；空值使用宿主默认格式。修改不重命名已有笔记。

- 存储层：vault；访问：write。
- 默认值：`""`。
- 生效：由宿主更新配置并刷新相关界面与服务；未运行时下次启动生效。
- 代码：`apps/aino-desktop/src/shared/contextSettings.d.ts`；默认值：`apps/aino-desktop/src/main/settingsDefaults.ts`。
- 前置字段：`usePeriodicNotes`。

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
