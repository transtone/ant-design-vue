import PropTypes from '../_util/vue-types';
import * as dayjs from 'dayjs';
import interopDefault from '../_util/interopDefault';
import { changeConfirmLocale } from '../modal/locale';
import Base from '../base';
// export interface Locale {
//   locale: string;
//   Pagination?: Object;
//   DatePicker?: Object;
//   TimePicker?: Object;
//   Calendar?: Object;
//   Table?: Object;
//   Modal?: ModalLocale;
//   Popconfirm?: Object;
//   Transfer?: Object;
//   Select?: Object;
//   Upload?: Object;
// }

function setDayjsLocale(locale) {
  if (locale && locale.locale) {
    interopDefault(dayjs).locale(locale.locale);
  } else {
    interopDefault(dayjs).locale('en');
  }
}

const LocaleProvider = {
  name: 'ALocaleProvider',
  props: {
    locale: PropTypes.object.def({}),
  },
  data() {
    return {
      antLocale: {
        ...this.locale,
        exist: true,
      },
    };
  },
  provide() {
    return {
      localeData: this.$data,
    };
  },
  watch: {
    locale(val) {
      this.antLocale = {
        ...this.locale,
        exist: true,
      };
      setDayjsLocale(val);
    },
  },
  created() {
    const { locale } = this;
    setDayjsLocale(locale);
    changeConfirmLocale(locale && locale.Modal);
  },
  updated() {
    const { locale } = this;
    changeConfirmLocale(locale && locale.Modal);
  },
  beforeDestroy() {
    changeConfirmLocale();
  },
  render() {
    return this.$slots.default ? this.$slots.default[0] : null;
  },
};

/* istanbul ignore next */
LocaleProvider.install = function (Vue) {
  Vue.use(Base);
  Vue.component(LocaleProvider.name, LocaleProvider);
};

export default LocaleProvider;
