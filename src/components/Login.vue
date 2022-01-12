<template>
  <h1>Login Page</h1>
  <br />
  
  <input type="email" name="email" placeholder="Enter Your Email"  v-model='email'/>
  <br />
  <input type="password" name="password" placeholder="Enter Your Password" v-model='password' />
  <br /><br />
  
  <button v-on:click="Login">Login</button>

  
</template>


<script>
import axios from 'axios'

export default {
  name: "Login",
data(){
    return {
        email :'',
        password :'',
        
      
    };
  },
  methods: {
      async Login() {
      console.log(`${this.email} ${this.password}`);
      let result = await axios.post('https://uiproject-01.herokuapp.com/login',{
          email : this.email,
          password : this.password
      });
      console.log("result : ", result)
     
    },
  },
  

}
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
