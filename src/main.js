import Vue from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
// import VueReCaptcha from 'vue-recaptcha-v3'

Vue.config.productionTip = false

Vue.use(VModal)
// Vue.use(VueReCaptcha, { siteKey: '6LfDk8wUAAAAAK5IC8UR7JRF03zvteD3KvAiqHUq' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
