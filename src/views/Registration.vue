<template>
  <div class="registerWrap">
    <va-form>
      <va-input
          class="mb-4 mr-4"
          label="Login"
          v-model="login"
          :rules="[value => (value && value.length > 0) || 'Field is required']"
      />
      <va-input
          class="mb-4 mr-4"
          label="Password"
          v-model="password"
          :rules="[value => (value && value.length > 0) || 'Field is required']"
      />
      <va-button @click="handleSubmit" color="info" class="mr-4">Register</va-button>
      <router-link to="/login">Register yet?</router-link>
    </va-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",
  data () {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('http://localhost:5000/auth/registration', {
        username : this.login,
        password : this.password
      })
      console.log(response)
    }
  }
}
</script>

<style scoped>
.registerWrap {
  max-width: 560px;
  margin: 0 auto;
}
</style>
