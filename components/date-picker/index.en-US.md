## API

There are four kinds of picker:

- DatePicker
- MonthPicker
- RangePicker
- WeekPicker

**Note:** Part of locale of DatePicker, MonthPicker, RangePicker, WeekPicker is read from value. So, please set the locale of dayjs correctly.

```html
// The default locale is en-US, if you want to use other locale, just set locale in entry file
globally. // import dayjs from 'dayjs-with-plugins'; // import 'dayjs/locale/zh-cn'; //
dayjs.locale('zh-cn');

<a-date-picker :defaultValue="dayjs('2015-01-01', 'YYYY-MM-DD')" />
```

### Common API

The following APIs are shared by DatePicker, MonthPicker, RangePicker, WeekPicker.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| allowClear | Whether to show clear button | boolean | true |
| autoFocus | get focus when component mounted | boolean | false |
| dateRender | custom rendering function for date cells by setting a scoped slot | slot="dateRender" slot-scope="current, today" | - |
| disabled | determine whether the DatePicker is disabled | boolean | false |
| disabledDate | specify the date that cannot be selected | (currentDate: dayjs) => boolean | - |
| getCalendarContainer | to set the container of the floating layer, while the default is to create a `div` element in `body` | function(trigger) | - |
| locale | localization configuration | object | [default](https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json) |
| mode | picker panel mode（[Cannot select year or month anymore?](/docs/vue/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?) | `time|date|month|year` | 'date' |
| open | open state of picker | boolean | - |
| placeholder | placeholder of date input | string\|RangePicker\[] | - |
| popupStyle | to customize the style of the popup calendar | object | {} |
| dropdownClassName | to customize the className of the popup calendar | string | - |
| size | determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | string | - |
| suffixIcon | The custom suffix icon | VNode \| slot | - |

### Common Events

| Events Name | Description | Arguments |
| --- | --- | --- |
| openChange | a callback function, can be executed whether the popup calendar is popped up or closed | function(status) |
| panelChange | callback when picker panel mode is changed | function(value, mode) |

### Common Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |

### DatePicker

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | to set default date | [dayjs](http://dayjsjs.com/) | - |
| defaultPickerValue | to set default picker date | [dayjs](http://dayjsjs.com/) | - |
| disabledTime | to specify the time that cannot be selected | function(date) | - |
| format | to set the date format, refer to [dayjs.js](http://dayjsjs.com/) | string | "YYYY-MM-DD" |
| renderExtraFooter | render extra footer in panel by setting a scoped slot | slot="renderExtraFooter" slot-scope="mode" | - |
| showTime | to provide an additional time selection | object\|boolean | [TimePicker Options](/components/time-picker/#API) |
| showTime.defaultValue | to set default time of selected date | [dayjs](http://dayjsjs.com/) | dayjs() |
| showToday | whether to show "Today" button | boolean | true |
| value(v-model) | to set date | [dayjs](http://dayjsjs.com/) | - |

### DatePicker Events

| Events Name | Description | Arguments |
| --- | --- | --- |
| calendarChange | a callback function, can be executed when the start time or the end time of the range is changing | function(dates: [dayjs, dayjs], dateStrings: [string, string]) |
| change | a callback function, can be executed when the selected time is changing | function(date: dayjs, dateString: string) |
| ok | callback when click ok button | function() |

### MonthPicker

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | to set default date | [dayjs](http://dayjsjs.com/) | - |
| defaultPickerValue | to set default picker date | [dayjs](http://dayjsjs.com/) | - |
| format | to set the date format. When an array is provided, all values are used for parsing and first value for display. refer to [dayjs.js](http://dayjsjs.com/) | string \| string[] | "YYYY-MM" |
| monthCellContentRender | Custom month cell content render method by setting a scoped slot | slot="monthCellContentRender" slot-scope="date, locale" | - |
| renderExtraFooter | render extra footer in panel by setting a scoped slot | slot="renderExtraFooter" slot-scope="mode" | - |
| value(v-model) | to set date | [dayjs](http://dayjsjs.com/) | - |

### MonthPicker Events

| Events Name | Description | Arguments |
| --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(date: dayjs, dateString: string) |

### WeekPicker

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | to set default date | [dayjs](http://dayjsjs.com/) | - |
| defaultPickerValue | to set default picker date | [dayjs](http://dayjsjs.com/) | - |
| format | to set the date format, refer to [dayjs.js](http://dayjsjs.com/) | string | "YYYY-wo" |
| value(v-model) | to set date | [dayjs](http://dayjsjs.com/) | - |
| renderExtraFooter | render extra footer in panel by setting a scoped slot | slot="renderExtraFooter" slot-scope="mode" | - |

### WeekPicker Events

| Events Name | Description | Arguments |
| --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(date: dayjs, dateString: string) |

### RangePicker

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | to set default date | [dayjs](http://dayjsjs.com/)\[] | - |
| defaultPickerValue | to set default picker date | [dayjs](http://dayjsjs.com/)\[] | - |
| disabledTime | to specify the time that cannot be selected | function(dates: \[dayjs, dayjs\], partial: `'start'|'end'`) | - |
| format | to set the date format | string | "YYYY-MM-DD HH:mm:ss" |
| ranges | preseted ranges for quick selection | { \[range: string]: [dayjs](http://dayjsjs.com/)\[] } \| { \[range: string]: () => [dayjs](http://dayjsjs.com/)\[] } | - |
| renderExtraFooter | render extra footer in panel by setting a scoped slot | slot="renderExtraFooter" slot-scope="mode" | - |
| showTime | to provide an additional time selection | object\|boolean | [TimePicker Options](/components/time-picker/#API) |
| showTime.defaultValue | to set default time of selected date, [demo](https://antdv.com/components/date-picker/#components-date-picker-demo-disabled-date) | [dayjs](http://dayjsjs.com/)\[] | \[dayjs(), dayjs()] |
| value(v-model) | to set date | \[[dayjs](http://dayjsjs.com/), [dayjs](http://dayjsjs.com/)] | - |

### RangePicker Events

| Events Name | Description | Arguments |
| --- | --- | --- |
| calendarChange | a callback function, can be executed when the start time or the end time of the range is changing | function(dates: \[dayjs, dayjs], dateStrings: \[string, string]) |
| change | a callback function, can be executed when the selected time is changing | function(dates: [dayjs, dayjs], dateStrings: [string, string]) |
| ok | callback when click ok button | function(dates: [dayjs](http://dayjsjs.com/)\[]) |
