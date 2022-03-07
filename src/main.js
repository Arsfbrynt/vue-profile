import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import "./icon";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ScrollAnimation from "./directives/scrollanimation";
import ScrollAnimation2 from "./directives/scrollanimation2";

Vue.directive("scrollanimation", ScrollAnimation);
Vue.directive("scrollanimation2", ScrollAnimation2);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
