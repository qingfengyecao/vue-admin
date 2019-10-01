import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"login"
      // name: 'home',
      // //这里是引入组件
      // component: Home
    },
    {
      path: '/login',
      name: 'Login',
      //这里是引入组件,这立有两中引用方法 
      // component: Login
      component: import ("./views/Login/Login.vue")
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
