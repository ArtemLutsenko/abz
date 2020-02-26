/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import store from './store'
import './styles/styles.scss';
import Vuelidate from 'vuelidate';

Vue.use(VueResource)
Vue.use(Vuelidate)

Vue.http.options.root = 'https://frontend-test-assignment-api.abz.agency/api/v1/'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
