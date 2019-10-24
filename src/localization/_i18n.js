import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './index.js'

Vue.use(VueI18n)
let locale = localStorage.getItem('lang') || navigator.language
if (locale.includes('en')) {
    locale = 'en'
} else {
    locale = 'zh'
}
export const i18n = new VueI18n({
    locale: locale,
    messages
  })