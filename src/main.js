import Vue from 'vue'
import ElementUI from 'element-ui'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import store from '@/vuex'
import {
  i18n
} from './localization/_i18n'
import 'normalize.css'


Vue.use(ElementUI)
Vue.use(VueCookies)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
