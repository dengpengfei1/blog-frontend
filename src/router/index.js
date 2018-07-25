import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const index = r => require(['../components/index.vue'], r)
const blog = r => require(['../components/blog.vue'], r)
const login = r => require(['../components/login.vue'], r)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
