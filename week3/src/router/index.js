import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/Draggable',
    name: 'Draggable',
    component: () => import('../views/DraggableView.vue')
  },
  {
    path: '/OpeningView',
    name: 'OpeningView',
    component: () => import('../views/OpeningView.vue')
  },
  {
    path: '/CastingView',
    name: 'CastingView',
    component: () => import('../views/CastingView.vue')
  },
  {
    path: '/SmalltestView',
    name: 'SmalltestView',
    component: () => import('../views/SmalltestView.vue')
  },
  {
    path: '/GradView',
    name: 'GradView',
    component: () => import('../views/GradView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
