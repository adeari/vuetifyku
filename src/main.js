import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from 'vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

const vuetifyOptions = { isDark: false }
Vue.use(vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount('#app')
