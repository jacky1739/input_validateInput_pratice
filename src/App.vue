<template>
  <div class="container">
    <gloabl-header :user="currentUser"></gloabl-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
            <li class="list-inline-item">课程</li>
            <li class="list-inline-item">文档</li>
            <li class="list-inline-item">联系</li>
            <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
  <!-- <div class="container">
    <home></home>
    <Login></Login>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GloablHeader, { UserProps } from './components/GlobalHeader.vue'
// import Home from './view/Home.vue'
// import Login from './view/Login.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: 'jacky'
}

export default defineComponent({
  name: 'App',
  components: {
    GloablHeader
  },
  setup () {
    return {
      currentUser
    }
  }
})
</script>

<style>
</style>
