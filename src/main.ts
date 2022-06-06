import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'
import Login from './view/Login.vue'
import App from './App.vue'

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
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
