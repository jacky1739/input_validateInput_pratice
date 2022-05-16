<template>
  <div class="validate-input-container pb-3">
    <input type="text"
      class="form-control"
      v-model="inputRef.val"
      @blur="validateInput"
    >
  </div>
</template>

<script lang="ts">
import { reactive, PropType, defineComponent } from 'vue'

// const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email'
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })

    const validateInput = () => { // 每個 rules 都必須通過 只要有一個沒有就視為 false 因此使用 every // every 會返回一個 boolean 值
      if (props.rules) {
        // const allPassed = props.rules.every(rule => {
        //   let passed = true
        //   inputRef.message = rule.message
        //   switch (rule.type) {
        //     case 'required':
        //       passed = (inputRef)
        //   }
        // })
      }
    }
    return { inputRef, validateInput }
  }
})
</script>
