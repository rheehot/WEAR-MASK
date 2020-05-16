import Vue from 'vue'
import App from './App'
import router from './router'
import Router from "vue-router";
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
Vue.use(Router)

new Vue({
  el:'#app',
  router,
  components: { App },
  template: '<App/>'
})

export default Vue;
