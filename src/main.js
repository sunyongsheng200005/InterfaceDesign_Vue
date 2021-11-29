/**
 * 该文件是整个项目的入口文件
 */
//引入vue
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'

import router from './router'

//关闭vue生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)

//创建vue实例对象
new Vue({
	el: '#root',
	//将App组件放入容器中
	render: h => h(App),
	router: router
})
