import Vue from 'vue'

import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import {i18n} from './localization/_i18n'
import 'normalize.css'


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
