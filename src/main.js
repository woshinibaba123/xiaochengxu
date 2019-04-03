import Vue from 'vue'
import App from './App'

import WXrequest from './utils/api'
Vue.prototype.$wxhttp= WXrequest

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
