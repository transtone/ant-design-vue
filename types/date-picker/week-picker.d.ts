// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { DatepickerCommon } from './common';
import { Dayjs } from 'dayjs';

export declare class WeekPicker extends DatepickerCommon {
  /**
   * to set default date
   * @type Dayjs
   */
  defaultValue: Dayjs;

  /**
   * to set default picker date
   * @type Dayjs
   */
  defaultPickerValue: Dayjs;

  /**
   * to set the date format, refer to dayjs.js
   * @default 'YYYY-wos'
   * @type string
   * @see http://dayjsjs.com
   */
  format: string;

  /**
   * to set date
   * @type Dayjs
   */
  value: Dayjs;
}
