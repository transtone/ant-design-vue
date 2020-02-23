<cn>
#### 禁用
选择框的不可用状态。
</cn>

<us>
#### Disabled
A disabled state of the `DatePicker`.
</us>

```tpl
<template>
  <div>
    <a-date-picker :defaultValue="dayjs('2015-06-06', dateFormat)" disabled />
    <br />
    <a-month-picker :defaultValue="dayjs('2015-06', 'YYYY-MM')" disabled />
    <br />
    <a-range-picker
      :defaultValue="[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]"
      disabled
    />
  </div>
</template>
<script>
  import dayjs from 'dayjs';
  export default {
    data() {
      this.dateFormat = 'YYYY-MM-DD';
      return {};
    },
    methods: {
      dayjs,
    },
  };
</script>
```
