import Vue from 'vue'
import App from './App.vue'
import Vue2Filter from "./jscomponent/vue2filter";
import marked from "./jscomponent/marked";

Vue.config.productionTip = false


new Vue({
  Vue2Filter, marked,
  render: h => h(App),
}).$mount('#app')
