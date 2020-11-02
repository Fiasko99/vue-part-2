import Vue from "vue";
import marked from "marked";

export default Vue.use({
  install () {
    Vue.marked = marked
    Vue.prototype.$marked = marked
  }
})

