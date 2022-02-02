import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Index from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {
    name: 'Card',
    path: '/card',
    component: Card
  },
  {
    name: 'tess',
    path: '/tess',
    component: Card
  },
];

const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
