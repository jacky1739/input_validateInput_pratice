<template>
  <div class="container bg-primary">
    <gloabl-header :user="currentUser"></gloabl-header>
  </div>
  <div class="container">
    <!-- <home></home> -->
    <Login></Login>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GloablHeader, { UserProps } from './components/GlobalHeader.vue'
// import Home from './view/Home.vue'
import Login from './view/Login.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'jacky'
}

export default defineComponent({
  name: 'App',
  components: {
    GloablHeader, Login
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
