import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'

interface UserProps { // 定義使用者資料
  isLogin: boolean
  name?: string
  id?: number
}

export interface GlobalDataProps { // 定義全局的資料
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'jacky' }
    }
  },
  getters: {
    // biggerColumnsLen (state) {
    //   return state.columns.filter(item => item.id > 2).length
    // }, // 沒有傳參數的兩種寫法都可以
    biggerColumnsLen: (state) => {
      return state.columns.filter(item => item.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (did: number) => {
      return state.posts.filter(post => post.columnId === did)
    }
  }
})

export default store
