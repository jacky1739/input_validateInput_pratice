<template>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="column in columnList" :key="column.id">
      <div class="card h-100 w-100 shadow-sm text-center" style="width: 18rem;">
        <div class="card-body">
          <img :src="column.avatar" class="rounded-circle border border-light w-25 my-3" :alt="column.title">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text">{{ column.description }}</p>
          <!-- <a href="#" class="btn btn-outline-primary">進入專欄</a> -->
          <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">進入專欄</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = 'https://cdn-icons-png.flaticon.com/128/2748/2748558.png'
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})

</script>
