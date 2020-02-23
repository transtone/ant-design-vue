<cn>
#### 基本
点击 TimePicker，然后可以在浮层中选择或者输入某一时间。
</cn>

<us>
#### Basic
Click `TimePicker`, and then we could select or input a time in panel.
</us>

```tpl
<template>
  <a-time-picker @change="onChange" :defaultOpenValue="dayjs('00:00:00', 'HH:mm:ss')" />
</template>
<script>
  import dayjs from 'dayjs';
  export default {
    methods: {
      dayjs,
      onChange(time, timeString) {
        console.log(time, timeString);
      },
    },
  };
</script>
```
