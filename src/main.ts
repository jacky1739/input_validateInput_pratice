import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

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

const app = createApp(App)
app.use(router)
app.mount('#app')
