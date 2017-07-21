import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/views/index'], resolve)
const Button = resolve => require(['@/views/button'], resolve)
const Icon = resolve => require(['@/views/icon'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/button',
        name: 'Button',
        component: Button
      }, {
        path: '/icon',
        name: 'Icon',
        component: Icon
      }]
    }]
})
