<template>
  <nav id="nav">
    <router-link to="/">Game</router-link>
    <router-link to="/registration">Register</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
