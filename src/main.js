import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Project from './components/Project.vue';
import NotFound from './components/NotFound.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{ path: '/', name: 'home', component:Home },
		{ path: '/project/:pjName', name: 'project', component:Project },    
		{ path: '*', name: 'notfound', component:NotFound }
	]
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
