import { createRouter, createWebHistory } from 'vue-router'
import ViewIniciojyj from '@/views/ViewIniciojyj.vue'

const isAuthenticated = () => {
  // Verificar si el token está presente en el sessionStorage u otro método de autenticación
  const storedToken = sessionStorage.getItem('token');
  return !!storedToken; // Devuelve true si el token está presente, false si no lo está
};

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
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          // El usuario está autenticado, permite la navegación
          next();
        } else {
          // El usuario no está autenticado, redirige a la página de inicio o a otra página de inicio de sesión
          next({ name: 'Inicio' });
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSelectOptionjyj.vue')
    },
    {
      path: '/InfoSummary/:_id/:city/:neigborhood/:stratum/:price/:room/:restroom/:age/:administration/:area/:description/:parking',
      name: 'InfoSummary',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSummaryjyj.vue'),
      props: true
    }
  ]
})

export default router
