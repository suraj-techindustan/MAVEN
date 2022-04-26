<template>
<div class="login">        
    <h2>Login Page..</h2>
    <input type="text" name="email" v-model="email" placeholder="Enter email">
    <input type="password" name="password" v-model="password" placeholder="Enter password">
    <div class="button_div">
    <div class="login_button">
    <button @click="login">Login</button>
    </div>
</div>
</div>
<p>
    <router-link to='/signup'>Signup</router-link>
</p>
</template>

<script>
import axios from 'axios'
const baseUlr = process.env.VUE_APP_ROOT_API;

export default{
    name:'Login',
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        async login(){
            console.log('Event for login :::' , this.email , this.password)
            let result = await axios.post(`${baseUlr}/api/v1/user/login`,{
                email:this.email,
                password:this.password
            })
            console.log('Result : ' , result)
            if(result.status==201){
                console.log('Login Done')
            }
            localStorage.setItem('User-Info',JSON.stringify(result.data))
            this.$router.push({name:'BookData'})
        }
    },
    mounted(){
        let user = localStorage.getItem('User-Info');
        if(user){
            this.$router.push({name:"BookData"})
        }
    }

}




</script>