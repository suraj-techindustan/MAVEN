<template>
  <h1>Signup Page</h1>
  <br />
  <input type="text" name="userName" placeholder="Enter Your Username"  v-model='userName'  />
  <br />
  <input type="text" name="email" placeholder="Enter Your Email"  v-model='email'/>
  <br />
  <input type="password" name="password" placeholder="Enter Your Password" v-model='password' />
  <br /><br />
  
  <button v-on:click="Signup1">Signup</button>
  
</template>


<script>
import axios from 'axios'

export default {
  name: "Signup",

  data() {
    return {
        userName :'',
        email :'',
        password :'',
      
    };
  },

  methods: {
    async Signup() {
      console.log(`${this.userName} ${this.email} ${this.password}`);
      let result = await axios.post('https://uiproject-01.herokuapp.com/adduser',{
          userName:this.userName,
          email : this.email,
          password : this.password
      });
      console.log("result : ", result)
    },
  },

  Signup1(){
     console.log('called')
  }
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
