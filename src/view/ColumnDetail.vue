<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// import { testData, testPosts } from '../testData'
import PostList from '../components/PostList.vue'
export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const currentId = +route.params.id // 利用+號把id從number轉為string
    // const column = testData.find(item => item.id === currentId)
    const column = computed(() => store.getters.getColumnById(currentId))
    // const list = testPosts.filter(post => post.columnId === currentId)
    const list = computed(() => store.getters.getPostsByCid(currentId))
    return {
      route, column, list
    }
  }
})
</script>
