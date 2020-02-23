// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { AntdComponent } from './component';
import { Dayjs } from 'dayjs-with-plugins';

export declare class Calendar extends AntdComponent {
  /**
   * Customize the display of the date cell by setting a scoped slot,
   * the returned content will be appended to the cell
   * @type Function
   */
  dateCellRender: (date: Dayjs) => any;

  /**
   * Customize the display of the date cell by setting a scoped slot,
   * the returned content will override the cell
   * @type Function
   */
  dateFullCellRender: (date: Dayjs) => any;

  /**
   * The date selected by default
   * @default default date
   * @type Dayjs
   */
  defaultValue: Dayjs;

  /**
   * Function that specifies the dates that cannot be selected
   * @type Function
   */
  disabledDate: (currentDate: Dayjs) => boolean;

  /**
   * Whether to display in full-screen
   * @default true
   * @type boolean
   */
  fullscreen: boolean;

  /**
   * The calendar's locale
   * @default [default]
   * @type object
   * @see https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json
   */
  locale: object;

  /**
   * The display mode of the calendar
   * @default 'month'
   * @type string
   */
  mode: 'month' | 'year';

  /**
   * Customize the display of the month cell by setting a scoped slot, the returned content will be appended to the cell
   * @type Function
   */
  monthCellRender: (date: Dayjs) => any;

  /**
   * Customize the display of the month cell by setting a scoped slot, the returned content will override the cell
   * @type Function
   */
  monthFullCellRender: (date: Dayjs) => any;

  /**
   * to set valid range
   * @type [Dayjs, Dayjs]
   */
  validRange: [Dayjs, Dayjs];

  /**
   * The current selected date
   * @default current date
   * @type Dayjs
   */
  value: Dayjs;
}
