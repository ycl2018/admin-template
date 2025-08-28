import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumb: '主页',
      },
    },
    {
      path: '/items',
      name: 'items',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        breadcrumb: '项目',
      },
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: HelloWorld,
          meta: {
            breadcrumb: '二级页',
          },
        },
      ],
    },
  ],
})

export default router
