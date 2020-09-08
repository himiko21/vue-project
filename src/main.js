import Vue from "vue";
import App from "./App.vue";
import { message, text } from "./variables";
import { display } from "./data";

Vue.config.productionTip = false;

new Vue({
    "render": (h) => h(App)
}).$mount("#app");

display(message);
display(text);
