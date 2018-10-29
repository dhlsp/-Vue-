import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from '@/components/HelloWorld'
import index from '@/page/index'

Vue.use(Router)

export default new Router({
  // mode: 'history',redirect
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      path: '/a',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      path: '/b',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      path: '/c',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      path: '/d',
      name: 'helloWorld',
      component: helloWorld
    }
  ]
})
