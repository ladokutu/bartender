import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import Index from './components/Index.vue'
import Movie from './components/Movie.vue'
import Project from './components/Project.vue'
import About from './components/About.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index,
	meta:{
		title:'News'
	}
  },
  {
    name: 'Movie',
    path: '/movie',
    component: Movie,
	meta:{
		title:'Movie'
	}
  },
  {
    name: 'Project',
    path: '/project',
    component: Project,
	meta:{
		title:'Project'
	}
  },
  {
    name: 'About',
    path: '/about',
    component: About,
	meta:{
		title:'About'
	}
  },
];

const router = new VueRouter({ 
	mode: 'history', 
	base: '/bartender/',
	routes: routes 
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
