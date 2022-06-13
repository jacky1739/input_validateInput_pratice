import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'
import Login from './view/Login.vue'
import ColumnDetail from './view/ColumnDetail.vue'

const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id', // 動態路由前面加上冒號
      name: 'column',
      component: ColumnDetail
    }
  ]
})

export default router
