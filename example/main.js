import Vue from 'vue'
import App from './App.vue'
import BaseMain from './../packages/index'
Vue.use(BaseMain)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
