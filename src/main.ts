import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createStore } from 'vuex'
import Home from './view/Home.vue'
import Login from './view/Login.vue'
import column from './view/ColumnDetail.vue'
import App from './App.vue'

const store = createStore({ // 需要一個支援響應式編程的store
  state: {
    count: 0
  },
  mutations: { // 非常的類似於事件
    add (state) {
      state.count++
    }
  }
})
console.log('store', store.state.count)
store.commit('add') // 修改對象需要 commit 方法
console.log('store', store.state.count)

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
      component: column
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
