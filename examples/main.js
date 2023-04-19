import Vue from "vue";
import App from "./App.vue";
import ZjUI from "../packages";
import "../dist/jzhou-ui.css";

Vue.config.productionTip = false;
Vue.use(ZjUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
