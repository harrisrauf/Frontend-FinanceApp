import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/expenses',
      children: [
        {
          path:'',
          component: () => import('../views/Expenses/index.vue'),
        },
        {
          path: ':id',
          component: () => import('../views/Expenses/edit.vue'),
        }
      ]
    },
        {
      path: '/incomes',
      children: [
        {
          path:'',
          component: () => import('../views/Incomes/index.vue'),
        },
        {
          path: ':id',
          component: () => import('../views/Incomes/edit.vue'),
        }
      ]
    },
  ],
})

export default router
