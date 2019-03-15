import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Car from '@/components/Car'
import Member from '@/components/Member'
Vue.use(Router)
export default new Router({
  // mode: 'history', // 去掉路由中的#号
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/classify',
      name: 'classify',
      component: Classify
    }, {
      path: '/car',
      name: 'car',
      component: Car
    }, {
      path: '/member',
      name: 'member',
      component: Member
    }
  ]
})
