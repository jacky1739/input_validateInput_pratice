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
  }
})

export default store
