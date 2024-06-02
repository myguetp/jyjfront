import { createRouter, createWebHistory } from 'vue-router'
import ViewIniciojyj from '@/views/ViewIniciojyj.vue'

const isAuthenticated = () => {
  const storedToken = sessionStorage.getItem('token');
  return !!storedToken
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: ViewIniciojyj
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
      beforeEnter: (to, from, next) => {
        // Check conditions, and call next() to allow navigation
        next();
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewLeasesjyj.vue')
    },
    {
      path: '/Sales',
      name: 'Sales',
      beforeEnter: (to, from, next) => {
        // Check conditions, and call next() to allow navigation
        next();
      },
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
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next({ name: 'Inicio' });
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewWithRegisterjyj.vue')
    },
    {
      path: '/Commerce',
      name: 'Commerce',
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next({ name: 'Inicio' });
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewCommercejyj.vue')
    },
    {
      path: '/Select',
      name: 'Select',
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next({ name: 'Inicio' });
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSelectOptionjyj.vue')
    },
    {
      path: '/InfoSummary',
      name: 'InfoSummary',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSummaryjyj.vue'),
      props: true
    },
    {
      path: '/RestorePassword',
      name: 'RestorePassword',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewRestorePasswordjyj.vue'),
      props: true
    },
    /**
     * Complexes 
     * 
     * */
    {
      path: '/Complexes',
      name: 'Complexes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/complexes/ViewComplexes.vue'),
      props: true
    },
    

  ]
})

export default router
