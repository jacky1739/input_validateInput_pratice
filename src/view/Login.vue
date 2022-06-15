<template>
  <div class="container">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">電子信箱</label>
        <validate-input type="text" placeholder="請輸入email" :rules="emailRules" v-model="emailValue" ref="inputRef"></validate-input>
        {{ emailValue }}
      </div>
      <div class="mb-3">
        <label class="form-label">密碼</label>
        <validate-input type="password" placeholder="請輸入密碼" :rules="passwordRules" v-model="passwordValue"></validate-input>
        {{ passwordValue }}
      </div>

      <!-- <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="emailRef.val" @blur="validateEmail">
        <div class="form-text" v-if="emailRef.error">{{ emailRef.message }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
  name: 'App',
  components: {
    ValidateInput, ValidateForm
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const inputRef = ref()
    const emailValue = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '帳號不能為空' },
      { type: 'email', message: '請輸入正確的電子信箱格式' }
    ]

    const passwordValue = ref('')
    const passwordRules: RulesProp = [
      { type: 'required', message: '密碼不能為空' }
    ]

    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      }
    }
    const onFormSubmit = (result: boolean) => {
      console.log('result', result)
      if (result) {
        router.push('/')
        store.commit('login')
      }
      // console.log('123123', result)
    }
    return {
      validateEmail, emailRef, emailRules, passwordRules, emailValue, passwordValue, onFormSubmit, inputRef
    }
  }
})
</script>

<style>
</style>
