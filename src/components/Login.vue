<template>
  <h1>Login Page</h1>
  <br />
  <input type="text" placeholder="Enter Your Email" />
  <br />
  <input type="password" placeholder="Enter Your Password" />
  <br /><br />
  <center>
    <button>
      <a href="https://uiproject-01.herokuapp.com/getUser">Login</a>
    </button>
  </center>
</template>


<script>
export default {
  name: "Login",

  data() {
    return {
      link: "https://uiproject-01.herokuapp.com/getUser",
    };
  },

  methods: {
    Login() {
      return this.link;
    },
  },
};
</script>


















<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
