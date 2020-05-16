import Vue from 'vue'
import App from './App'
import router from './router'
import Router from "vue-router";
import VueCompositionApi from '@vue/composition-api';
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueCompositionApi);
Vue.use(Router)
Vue.use(VueFullPage);

new Vue({
  el:'#app',
  router,
  components: { App },
  template: '<App/>'
})

export default Vue;
