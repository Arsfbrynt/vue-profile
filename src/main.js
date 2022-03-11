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
import smoothscroll from "smoothscroll-polyfill";

Vue.directive("scrollanimation", ScrollAnimation);
Vue.directive("scrollanimation2", ScrollAnimation2);
smoothscroll.polyfill();

Vue.directive("scroll", {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
});

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
