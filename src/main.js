import Vue from 'vue'
import App from './App.vue'
import Global from './components/Global'
import Global2 from './components/Global2'

Vue.config.productionTip = false
Vue.component('Global',Global);
Vue.component('Global2',Global2);
new Vue({
  render: h => h(App),
}).$mount('#app')
