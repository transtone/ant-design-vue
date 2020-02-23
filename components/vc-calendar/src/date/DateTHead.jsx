import DateConstants from './DateConstants';
import dayjs from 'dayjs-with-plugins';

export default {
  functional: true,
  render(createElement, context) {
    const { props } = context;
    const value = props.value;
    const localeData = props.value;
    const prefixCls = props.prefixCls;
    const veryShortWeekdays = [];
    const weekDays = [];
    const firstDayOfWeek = 0;
    let showWeekNumberEl;
    const now = dayjs();
    const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const weekdaysMin = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    //  todo 替换
    for (let dateColIndex = 0; dateColIndex < DateConstants.DATE_COL_COUNT; dateColIndex++) {
      const index = (firstDayOfWeek + dateColIndex) % DateConstants.DATE_COL_COUNT;
      veryShortWeekdays[dateColIndex] = weekdaysMin[index];
      weekDays[dateColIndex] = weekdaysShort[index];
    }

    if (props.showWeekNumber) {
      showWeekNumberEl = (
        <th
          role="columnheader"
          class={`${prefixCls}-column-header ${prefixCls}-week-number-header`}
        >
          <span class={`${prefixCls}-column-header-inner`}>x</span>
        </th>
      );
    }
    const weekDaysEls = weekDays.map((day, xindex) => {
      return (
        <th key={xindex} role="columnheader" title={day} class={`${prefixCls}-column-header`}>
          <span class={`${prefixCls}-column-header-inner`}>{veryShortWeekdays[xindex]}</span>
        </th>
      );
    });
    return (
      <thead>
        <tr role="row">
          {showWeekNumberEl}
          {weekDaysEls}
        </tr>
      </thead>
    );
  },
};
