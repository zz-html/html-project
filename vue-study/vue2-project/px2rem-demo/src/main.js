import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import websocket from './utils/websocket.js'
Vue.prototype.$websocket = websocket;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
