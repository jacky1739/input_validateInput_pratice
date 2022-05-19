<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
<<<<<<< HEAD
=======
      v-bind="$attrs"
>>>>>>> 7e28dcdc94a6a4d369932495abd4cfb4cb87d491
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { reactive, PropType, defineComponent } from 'vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email'
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
<<<<<<< HEAD
  setup (props, context) {
=======
  inheritAttrs: false,
  setup (props, context) {
    console.log(context.attrs)
>>>>>>> 7e28dcdc94a6a4d369932495abd4cfb4cb87d491
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () => { // 每個 rules 都必須通過 只要有一個沒有就視為 false 因此使用 every
      if (props.rules) { // every 會返回一個 boolean 值
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
<<<<<<< HEAD

    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
=======
>>>>>>> 7e28dcdc94a6a4d369932495abd4cfb4cb87d491
    return { inputRef, validateInput, updateValue }
  }
})
</script>
