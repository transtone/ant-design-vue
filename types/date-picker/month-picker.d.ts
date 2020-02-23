// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { DatepickerCommon } from './common';
import { Dayjs } from 'dayjs-with-plugins';

export declare class MonthPicker extends DatepickerCommon {
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
   * to set the date format, When an array is provided, all values are used for parsing and first value for display. refer to dayjs.js
   * @default 'YYYY-MM'
   * @type string | string[]
   * @see http://dayjsjs.com
   */
  format: string | string[];

  /**
   * Custom month cell content render method by setting a scoped slot
   * @type Function (slot="monthCellContentRender", slot-scope="date, locale")
   */
  monthCellContentRender: Function;

  /**
   * render extra footer in panel by setting a scoped slot
   * @type any (slot="renderExtraFooter")
   */
  renderExtraFooter: any;

  /**
   * to set date
   * @type Dayjs
   */
  value: Dayjs;
}
