<template>
  <nav id="nav">
    <router-link to="/">Game</router-link>
    <router-link to="/registration">Register</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: rgb(44, 130, 224);
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 50px;
  a {
    margin-right: 30px;
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #aaf563;
    }
  }
}
</style>
