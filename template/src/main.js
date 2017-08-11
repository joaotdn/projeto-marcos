import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

// components
import Busca from './components/Busca.vue'
import Home from './components/Home.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/buscar', component: Busca },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
