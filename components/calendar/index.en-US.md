## API

**Note:** Part of the Calendar's locale is read from `value`. So, please set the locale of `dayjs` correctly.

```html
// The default locale is en-US, if you want to use other locale, just set locale in entry file
globally. // import dayjs from 'dayjs-with-plugins'; // import 'dayjs/locale/zh-cn'; //
dayjs.locale('zh-cn');

<a-calendar @panelChange="onPanelChange" @select="onSelect">
  <template slot="dateCellRender" slot-scope="value"></template>
  <template slot="monthCellRender" slot-scope="value"></template>
</a-calendar>
```

customize the progress dot by setting a scoped slot

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| dateCellRender | Customize the display of the date cell by setting a scoped slot, the returned content will be appended to the cell | function(date: dayjs) | - |
| dateFullCellRender | Customize the display of the date cell by setting a scoped slot, the returned content will override the cell | function(date: dayjs) | - |
| defaultValue | The date selected by default | [dayjs](http://dayjsjs.com/) | default date |
| disabledDate | Function that specifies the dates that cannot be selected | (currentDate: dayjs) => boolean | - |
| fullscreen | Whether to display in full-screen | boolean | `true` |
| locale | The calendar's locale | object | [default](https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json) |
| mode | The display mode of the calendar | `month` \| `year` | `month` |
| monthCellRender | Customize the display of the month cell by setting a scoped slot, the returned content will be appended to the cell | function(date: dayjs) | - |
| monthFullCellRender | Customize the display of the month cell by setting a scoped slot, the returned content will override the cell | function(date: dayjs) | - |
| validRange | to set valid range | \[[dayjs](http://dayjsjs.com/), [dayjs](http://dayjsjs.com/)] | - |
| value(v-model) | The current selected date | [dayjs](http://dayjsjs.com/) | current date |

### events

| Events Name | Description                          | Arguments                            |
| ----------- | ------------------------------------ | ------------------------------------ |
| panelChange | Callback for when panel changes      | function(date: dayjs, mode: string) | - |
| select      | Callback for when a date is selected | function(date: dayjs）              | - |
| change      | Callback for when value change       | function(date: dayjs）              | - |
