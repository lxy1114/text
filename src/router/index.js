import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import details from '@/components/details'
import prac from '@/components/prac'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/prac',
      name: 'prac',
      component: prac
    }
  ]
})
