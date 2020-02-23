// https://github.com/dayjs/dayjs/issues/3650
export default function callDayjs(dayjs, ...args) {
  return (dayjs.default || dayjs)(...args);
}
