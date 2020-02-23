import { mount } from '@vue/test-utils';
import { asyncExpect } from '@/tests/utils';
import dayjs from 'dayjs-with-plugins';
import DatePicker from '..';
import focusTest from '../../../tests/shared/focusTest';
import { openPanel, $$ } from './utils';

const { MonthPicker } = DatePicker;

describe('MonthPicker', () => {
  focusTest(MonthPicker);
  it('reset select item when popup close', async () => {
    const wrapper = mount(MonthPicker, {
      propsData: { value: dayjs('2018-07-01') },
      sync: false,
      attachToDocument: true,
    });
    await asyncExpect(() => {
      openPanel(wrapper);
    }, 0);
    await asyncExpect(() => {
      $$('.ant-calendar-month-panel-month')[0].click();
      $$('.ant-calendar-month-panel-cell')[6]
        .getAttribute('class')
        .split(' ')
        .includes('ant-calendar-month-panel-selected-cell');
    }, 1000);
  });
});
