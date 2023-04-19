// 整个包的入口
// 定义install方法,接受Vue作为参数

import Button from "./button.vue";
import Dialog from "./dialog.vue";
import Input from "./input.vue";
import Checkbox from "./checkbox.vue";
import CheckboxGroup from "./checkbox-group.vue";
import Radio from "./radio.vue";
import RadioGroup from "./radio-group.vue";
import Switch from "./switch.vue";
import Form from "./form.vue";
import FormItem from "./form-item.vue";
import "./font/iconfont.scss";
// 组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem,
];
const install = function (Vue) {
  // 注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};

// 判断是否是直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default install;
