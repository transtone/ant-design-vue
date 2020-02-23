## API

日期类组件包括以下四种形式。

- DatePicker
- MonthPicker
- RangePicker
- WeekPicker

**注意：**DatePicker、MonthPicker、RangePicker、WeekPicker 部分 locale 是从 value 中读取，所以请先正确设置 dayjs 的 locale。

```html
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale import dayjs from
'dayjs'; import 'dayjs/locale/zh-cn'; dayjs.locale('zh-cn');

<a-date-picker :defaultValue="dayjs('2015-01-01', 'YYYY-MM-DD')" />
```

### 共同的 API

以下 API 为 DatePicker、MonthPicker、RangePicker, WeekPicker 共享的 API。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | boolean | true |
| autoFocus | 自动获取焦点 | boolean | false |
| dateRender | 作用域插槽，自定义日期单元格的内容 | slot="dateRender" slot-scope="current, today" | - |
| disabled | 禁用 | boolean | false |
| disabledDate | 不可选择的日期 | (currentDate: dayjs) => boolean | 无 |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |
| locale | 国际化配置 | object | [默认配置](https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json) |
| open | 控制弹层是否展开 | boolean | - |
| placeholder | 输入框提示文字 | string\|RangePicker\[] | - |
| popupStyle | 额外的弹出日历样式 | object | {} |
| dropdownClassName | 额外的弹出日历 className | string | - |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | string | 无 |
| suffixIcon | 自定义的选择框后缀图标 | VNode \| slot | - |

### 共有的事件

| 事件名称    | 说明                     | 回调参数              |
| ----------- | ------------------------ | --------------------- |
| openChange  | 弹出日历和关闭日历的回调 | function(status)      |
| panelChange | 日期面板变化时的回调     | function(value, mode) | - |

### 共同的方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### DatePicker

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](http://dayjsjs.com/) | 无 |
| defaultPickerValue | 默认面板日期 | [dayjs](http://dayjsjs.com/) | 无 |
| disabledTime | 不可选择的时间 | function(date) | 无 |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [dayjs.js](http://dayjsjs.com/) | string \| string[] | "YYYY-MM-DD" |
| mode | 日期面板的状态（[设置后无法选择年份/月份？](/docs/vue/faq#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？)） | `time|date|month|year` | 'date' |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - |
| showTime | 增加时间选择功能 | Object\|boolean | [TimePicker Options](/components/time-picker-cn/#API) |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒 | [dayjs](http://dayjsjs.com/) | dayjs() |
| showToday | 是否展示“今天”按钮 | boolean | true |
| value(v-model) | 日期 | [dayjs](http://dayjsjs.com/) | 无 |

### DatePicker 事件

| 事件名称 | 说明               | 回调参数                                   |
| -------- | ------------------ | ------------------------------------------ |
| change   | 时间发生变化的回调 | function(date: dayjs, dateString: string) |
| ok       | 点击确定按钮的回调 | function()                                 |

### MonthPicker

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](http://dayjsjs.com/) | 无 |
| defaultPickerValue | 默认面板日期 | [dayjs](http://dayjsjs.com/) | 无 |
| format | 展示的日期格式，配置参考 [dayjs.js](http://dayjsjs.com/) | string | "YYYY-MM" |
| monthCellContentRender | 自定义的月份内容渲染方法 | slot="monthCellContentRender" slot-scope="date, locale" | - |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - |
| value(v-model) | 日期 | [dayjs](http://dayjsjs.com/) | 无 |

### MonthPicker 事件

| 事件名称 | 说明                                     | 回调参数                                   |
| -------- | ---------------------------------------- | ------------------------------------------ |
| change   | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) |

### WeekPicker

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](http://dayjsjs.com/) | - |
| defaultPickerValue | 默认面板日期 | [dayjs](http://dayjsjs.com/) | 无 |
| format | 展示的日期格式，配置参考 [dayjs.js](http://dayjsjs.com/) | string | "YYYY-wo" |
| value(v-model) | 日期 | [dayjs](http://dayjsjs.com/) | - |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - |

### WeekPicker 事件

| 事件名称 | 说明                                     | 回调参数                                   |
| -------- | ---------------------------------------- | ------------------------------------------ |
| change   | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) |

### RangePicker

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | [dayjs](http://dayjsjs.com/)\[] | 无 |
| defaultPickerValue | 默认面板日期 | [dayjs](http://dayjsjs.com/)\[] | 无 |
| disabledTime | 不可选择的时间 | function(dates: \[dayjs, dayjs\], partial: `'start'|'end'`) | 无 |
| format | 展示的日期格式 | string | "YYYY-MM-DD HH:mm:ss" |
| ranges       | 预设时间范围快捷选择 | { \[range: string]: [dayjs](http://dayjsjs.com/)\[] } \| { \[range: string]: () => [dayjs](http://dayjsjs.com/)\[] } | 无 |
| renderExtraFooter | 在面板中添加额外的页脚 | slot="renderExtraFooter" slot-scope="mode" | - |
| showTime | 增加时间选择功能 | Object\|boolean | [TimePicker Options](/components/time-picker-cn/#API) |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒 | [dayjs](http://dayjsjs.com/)\[] | \[dayjs(), dayjs()] |
| value(v-model) | 日期 | [dayjs](http://dayjsjs.com/)\[] | 无 |

### RangePicker 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| calendarChange | 待选日期发生变化的回调 | function(dates: \[dayjs, dayjs\], dateStrings: \[string, string\]) |
| change | 日期范围发生变化的回调 | function(dates: \[dayjs, dayjs\], dateStrings: \[string, string\]) | 无 |
| ok | 点击确定按钮的回调 | function(dates: [dayjs](http://dayjsjs.com/)\[]) |
