// eslint-disable-next-line
/* eslint-disable */
import Vue from "vue";
import "./plugins/vuex";
import "./plugins/axios";
import { i18n } from "./plugins/vue-i18n";
import { router } from "./plugins/vue-router";
import "./plugins/vuex-router-sync";
import "./plugins/bootstrap";
import "./plugins/font-awesome";
import "./plugins/register-service-worker";

import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

store.dispatch("auth/check");

new Vue({
  el: "#app",
  i18n,
  router,
  store,
  render: (h) => h(App),
});
