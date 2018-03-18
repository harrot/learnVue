import Vue from 'vue';
import App from './App' //add extentions in webpack.config.js or using ./App.vue

new Vue({
	el: '#app',
	//render: h => h(App) // can be replace below statements
	template: '<App />',
	components: { App }
});