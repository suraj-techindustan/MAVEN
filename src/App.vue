<template>

<router-link to="Home">Home</router-link>
<router-link to="Login">Login</router-link>
<router-link to="Signup">Signup</router-link>

<router-view></router-view>
<Navbar />
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  
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
