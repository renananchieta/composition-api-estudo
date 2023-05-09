import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/parte1',
    name: 'Parte 1',
    component: () => import('../views/parte1View.vue')
  },
  {
    path: '/parte2',
    name: 'Parte 2',
    component: () => import('../views/parte2View.vue')
  },
  {
    path: '/parte3',
    name: 'Parte 3',
    component: () => import('../views/parte3View.vue')
  },
  {
    path: '/parte4',
    name: 'Parte 4',
    component: () => import('../views/parte4View.vue')
  },{
    path: '/CounterComponent',
    name: 'CounterComponent',
    component: () => import('../views/counterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
