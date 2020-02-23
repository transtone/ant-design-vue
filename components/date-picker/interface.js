import * as dayjs from 'dayjs-with-plugins';
// import { TimePickerProps } from '../time-picker'
import PropTypes from '../_util/vue-types';

export const DayjsType = {
  type: Object,
  validator: function (value) {
    return value === undefined || dayjs.isMoment(value);
  },
};

export const PickerProps = () => ({
  transitionName: PropTypes.string,
  prefixCls: PropTypes.string,
  inputPrefixCls: PropTypes.string,
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  allowClear: PropTypes.bool,
  suffixIcon: PropTypes.any,
  popupStyle: PropTypes.object,
  dropdownClassName: PropTypes.string,
  locale: PropTypes.any,
  localeCode: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'default']),
  getCalendarContainer: PropTypes.func,
  open: PropTypes.bool,
  // onOpenChange: PropTypes.(status: bool) => void,
  disabledDate: PropTypes.func,
  renderExtraFooter: PropTypes.any,
  showToday: PropTypes.bool,
  dateRender: PropTypes.any, // (current: dayjs.Dayjs, today: dayjs.Dayjs) => React.ReactNode,
  pickerClass: PropTypes.string,
  pickerInputClass: PropTypes.string,
  timePicker: PropTypes.any,
  autoFocus: PropTypes.bool,
  tagPrefixCls: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

export const SinglePickerProps = () => ({
  value: DayjsType,
  defaultValue: DayjsType,
  defaultPickerValue: DayjsType,
  // onChange?: (date: dayjs.Dayjs, dateString: string) => void;
});

export const DatePickerProps = () => ({
  ...PickerProps(),
  ...SinglePickerProps(),
  showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  open: PropTypes.bool,
  disabledTime: PropTypes.func,
  // onOpenChange?: (status: bool) => void;
  // onOk?: (selectedTime: dayjs.Dayjs) => void;
  placeholder: PropTypes.string,
  mode: PropTypes.oneOf(['time', 'date', 'month', 'year']),
});

export const MonthPickerProps = () => ({
  ...PickerProps(),
  ...SinglePickerProps(),
  placeholder: PropTypes.string,
  monthCellContentRender: PropTypes.func,
});
function isDayjsArray(value) {
  if (Array.isArray(value)) {
    return (
      value.length === 0 || value.findIndex(val => val === undefined || dayjs.isMoment(val)) !== -1
    );
  }
  return false;
}

export const RangePickerValue = PropTypes.custom(isDayjsArray);
// export const RangePickerPresetRange = PropTypes.oneOfType([RangePickerValue, PropTypes.func])

export const RangePickerProps = () => ({
  ...PickerProps(),
  value: RangePickerValue,
  defaultValue: RangePickerValue,
  defaultPickerValue: RangePickerValue,
  // onChange?: (dates: RangePickerValue, dateStrings: [string, string]) => void;
  // onCalendarChange?: (dates: RangePickerValue, dateStrings: [string, string]) => void;
  // onOk?: (selectedTime: dayjs.Dayjs) => void;
  showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  ranges: PropTypes.object,
  placeholder: PropTypes.arrayOf(String),
  mode: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(String)]),
  disabledTime: PropTypes.func,
  showToday: PropTypes.bool,
  // onPanelChange?: (value?: RangePickerValue, mode?: string | string[]) => void;
});

export const WeekPickerProps = () => ({
  ...PickerProps(),
  ...SinglePickerProps(),
  placeholder: PropTypes.string,
});

// export interface DatePickerDecorator extends React.ClassicComponentClass<DatePickerProps> {
//   RangePicker: React.ClassicComponentClass<RangePickerProps>;
//   MonthPicker: React.ClassicComponentClass<MonthPickerProps>;
//   WeekPicker: React.ClassicComponentClass<WeexPickerProps>;
// }
