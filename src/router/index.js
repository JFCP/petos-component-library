import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //component: HomeView
    },
    {
      path: '/headings',
      name: 'headings',
      // route level code-splitting
      // this generates a separate chunk for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HeadingsView.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/ButtonsView.vue')
    }
  ]
})

export default router
