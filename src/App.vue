<template>
  <img alt="Vue logo" src="./assets/logo.png">
<router-link to="Home">Home</router-link>
<router-link to="Login">Login</router-link>
<router-link to="Signup">Signup</router-link>

<router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
