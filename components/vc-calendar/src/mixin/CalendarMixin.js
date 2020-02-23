import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { hasProp } from '../../../_util/props-util';
import Dayjs from 'dayjs';
import { isAllowedDate, getTodayTime } from '../util/index';
function noop() { }

export function getNowByCurrentStateValue(value) {
  let ret;
  if (value) {
    ret = getTodayTime(value);
  } else {
    ret = Dayjs();
  }
  return ret;
}
function isDayjs(value) {
  if (Array.isArray(value)) {
    return (
      value.length === 0 || value.findIndex(val => val === undefined || Dayjs.isMoment(val)) !== -1
    );
  } else {
    return value === undefined || Dayjs.isMoment(value);
  }
}
const DayjsType = PropTypes.custom(isDayjs);
const CalendarMixin = {
  mixins: [BaseMixin],
  name: 'CalendarMixinWrapper',
  props: {
    value: DayjsType,
    defaultValue: DayjsType,
  },

  data() {
    const props = this.$props;
    const sValue = props.value || props.defaultValue || getNowByCurrentStateValue();
    return {
      sValue,
      sSelectedValue: props.selectedValue || props.defaultSelectedValue,
    };
  },
  watch: {
    value(val) {
      const sValue = val || this.defaultValue || getNowByCurrentStateValue(this.sValue);
      this.setState({
        sValue,
      });
    },
    selectedValue(val) {
      this.setState({
        sSelectedValue: val,
      });
    },
  },
  methods: {
    onSelect(value, cause) {
      if (value) {
        this.setValue(value);
      }
      this.setSelectedValue(value, cause);
    },

    renderRoot(newProps) {
      const props = this.$props;
      const prefixCls = props.prefixCls;

      const className = {
        [prefixCls]: 1,
        [`${prefixCls}-hidden`]: !props.visible,
        // [props.className]: !!props.className,
        [newProps.class]: !!newProps.class,
      };
      return (
        <div ref="rootInstance" class={className} tabIndex="0" onKeydown={this.onKeyDown || noop}>
          {newProps.children}
        </div>
      );
    },

    setSelectedValue(selectedValue, cause) {
      // if (this.isAllowedDate(selectedValue)) {
      if (!hasProp(this, 'selectedValue')) {
        this.setState({
          sSelectedValue: selectedValue,
        });
      }
      this.__emit('select', selectedValue, cause);
      // }
    },

    setValue(value) {
      const originalValue = this.sValue;
      if (!hasProp(this, 'value')) {
        this.setState({
          sValue: value,
        });
      }
      if (
        (originalValue && value && !originalValue.isSame(value)) ||
        (!originalValue && value) ||
        (originalValue && !value)
      ) {
        this.__emit('change', value);
      }
    },

    isAllowedDate(value) {
      const disabledDate = this.disabledDate;
      const disabledTime = this.disabledTime;
      return isAllowedDate(value, disabledDate, disabledTime);
    },
  },
};

export default CalendarMixin;
