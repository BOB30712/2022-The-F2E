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
    path: '/PDF',
    name: 'PDF',
    component: () => import('../views/PdfPractice.vue')
  },
  {
    path: '/PdfView',
    name: 'PdfView',
    component: () => import('../views/PdfView.vue')
  },
  {
    path: '/PdfView2',
    name: 'PdfView2',
    component: () => import('../views/PdfView2.vue')
  },
  {
    path: '/DrawView',
    name: 'DrawView',
    component: () => import('../views/DrawView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
