import Vue from 'vue';
import VueRouter from 'vue-router'
import firstComp from './components/FirstComponent'
import secondComp from './components/SecondComponent'

Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path:'/', component: firstComp},
		{path: '/test', component: secondComp}
	]
})

new Vue({
	router,
	template: `
		<div id='app'>
			<h1> Vue example for router</h1>
			<ul>
				<li><router-link to="/">firstComp</router-link></li>
				<li><router-link to="/test">secondComp</router-link></li>
			</ul>
			<router-view></router-view>
		</div>
	`,
}).$mount('#app');