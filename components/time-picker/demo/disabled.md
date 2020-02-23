<cn>
#### 禁用
禁用时间选择。
</cn>

<us>
#### disabled
A disabled state of the `TimePicker`.
</us>

```tpl
<template>
  <a-time-picker :defaultValue="dayjs('12:08:23', 'HH:mm:ss')" disabled />
</template>
<script>
  import dayjs from 'dayjs-with-plugins';
  export default {
    methods: {
      dayjs,
    },
  };
</script>
```
