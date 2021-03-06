// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { DatepickerCommon } from './common';
import { Dayjs } from 'dayjs-with-plugins';
import { RangePicker } from './range-picker';
import { MonthPicker } from './month-picker';
import { WeekPicker } from './week-picker';

export declare class DatePicker extends DatepickerCommon {
  static RangePicker: typeof RangePicker;
  static MonthPicker: typeof MonthPicker;
  static WeekPickerker: typeof WeekPicker;

  /**
   * Defualt Value
   * @description to set default date
   * @default undefined
   * @type Dayjs
   */
  defaultValue: Dayjs;

  /**
   * Default Picker Value
   * @description to set default picker date
   * @default undefined
   * @type Dayjs
   */
  defaultPickerValue: Dayjs;

  /**
   * Disabled Time
   * @description to specify the time that cannot be selected
   * @default undefined
   * @type Function (function(date))
   */
  disabledTime: Function;

  /**
   * Format
   * @description to set the date format, refer to dayjs.js http://dayjsjs.com
   * @default 'YYYY-MM-DD'
   * @type string
   */
  format: string;

  /**
   * Render Extra Footer
   * @description render extra footer in panel by setting a scoped slot
   * @default undefined
   * @type any (slot="renderExtraFooter")
   */
  renderExtraFooter: any;

  /**
   * Show Time
   * @description to provide an additional time selection
   * showTime.defaultValue to set default time of selected date - type Dayjs
   * --
   * @default TimePicker Options
   * @type object | boolean
   */
  showTime: object | boolean;

  /**
   * Show Today
   * @description whether to show "Today" button
   * @default true
   * @type boolean
   */
  showToday: boolean;

  /**
   * Value
   * @description to set date
   * @default undefined
   * @type Dayjs
   */
  value: Dayjs;
}
