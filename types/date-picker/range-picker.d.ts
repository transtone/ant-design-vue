// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { DatepickerCommon } from './common';
import { Dayjs } from 'dayjs-with-plugins';

export declare class RangePicker extends DatepickerCommon {
  /**
   * to set default date
   * @type [Dayjs, Dayjs]
   */
  defaultValue: [Dayjs, Dayjs];

  /**
   * to set default picker date
   * @type [Dayjs, Dayjs]
   */
  defaultPickerValue: [Dayjs, Dayjs];

  /**
   * to specify the time that cannot be selected
   * @type Function
   */
  disabledTime: (dates: [Dayjs, Dayjs], partial: 'start' | 'end') => any;

  /**
   * to set the date format, refer to dayjs.js
   * @default 'YYYY-MM-DD HH:mm:ss'
   * @type string
   * @see http://dayjsjs.com
   */
  format: string;

  /**
   * preseted ranges for quick selection
   * @type object
   */
  ranges: { [range: string]: Dayjs[] } | { [range: string]: () => Dayjs[] };

  /**
   * render extra footer in panel by setting a scoped slot
   * @type any (slot="renderExtraFooter")
   */
  renderExtraFooter: any;

  /**
   * to provide an additional time selection
   * showTime.defaultValue to set default time of selected date - type Dayjs[]
   * @default TimePicker Options
   * @type object | boolean
   */
  showTime: object | boolean;

  /**
   * to set date
   * @type [Dayjs, Dayjs]
   */
  value: [Dayjs, Dayjs];
}
