## API

**注意：**Calendar 部分 locale 是从 value 中读取，所以请先正确设置 dayjs 的 locale。

```html
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale // import dayjs from
'dayjs'; // import 'dayjs/locale/zh-cn'; // dayjs.locale('zh-cn');

<a-calendar @panelChange="onPanelChange" @select="onSelect">
  <template slot="dateCellRender" slot-scope="value"></template>
  <template slot="monthCellRender" slot-scope="value"></template>
</a-calendar>
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dateCellRender | 作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格, | function(date: dayjs) | 无 |
| dateFullCellRender | 作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格 | function(date: dayjs) | 无 |
| defaultValue | 默认展示的日期 | [dayjs](http://dayjsjs.com/) | 默认日期 |
| disabledDate | 不可选择的日期 | (currentDate: dayjs) => boolean | 无 |
| fullscreen | 是否全屏显示 | boolean | true |
| locale | 国际化配置 | object | [默认配置](https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json) |
| mode | 初始模式，`month/year` | string | month |
| monthCellRender | 作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格 | function(date: dayjs) | 无 |
| monthFullCellRender | 作用域插槽，自定义渲染月单元格，返回内容覆盖单元格 | function(date: dayjs) | 无 |
| validRange | 设置可以显示的日期 | \[[dayjs](http://dayjsjs.com/), [dayjs](http://dayjsjs.com/)] | 无 |
| value(v-model) | 展示日期 | [dayjs](http://dayjsjs.com/) | 当前日期 |

### 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| panelChange | 日期面板变化回调 | function(date: dayjs, mode: string) | 无 |
| select | 点击选择日期回调 | function(date: dayjs） | 无 |
| change | 日期变化时的回调, 面板变化有可能导致日期变化 | function(date: dayjs） | 无 |
