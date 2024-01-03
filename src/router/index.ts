import { createRouter, createWebHistory } from 'vue-router'
import ViewIniciojyj from '@/views/ViewIniciojyj.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: ViewIniciojyj
    },
    {
      path: '/Advertisements',
      name: 'Advertisements',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewAdvertisementsjyj.vue')
    },
    {
      path: '/Us',
      name: 'Us',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewUsjyj.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewContactjyj.vue')
    },
    {
      path: '/Leases',
      name: 'Leases',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewLeasesjyj.vue')
    },
    {
      path: '/Sales',
      name: 'Sales',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSalesjyj.vue')
    },
    {
      path: '/SalesLeases',
      name: 'SalesLeases',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewFormSalesleasesjyj.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewWithRegisterjyj.vue')
    },
    {
      path: '/Select',
      name: 'Select',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSelectOptionjyj.vue')
    }
  ]
})

export default router
