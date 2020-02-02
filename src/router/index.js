import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Servicos from '../views/Servicos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: Servicos
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bookings.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
