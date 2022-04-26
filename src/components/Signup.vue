<template>
<div class="register">        
    <h2>Signup Page..</h2>
    <input type="text" name="name" v-model="name" placeholder="Enter name">
    <input type="text" name="email" v-model="email" placeholder="Enter email">
    <input type="password" name="password" v-model="password" placeholder="Enter password">
    <div class="button_div">
    <div class="sigup_button">
    <button @click="signup">Signup</button>
    </div>
</div>
</div>
<p>
    <router-link to='/login'>Login</router-link>
</p>
</template>

<script>
import axios from 'axios'
const baseUlr = process.env.VUE_APP_ROOT_API;

export default{
    name:"Signup",
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup(){
            console.log('Event is Clicked....',this.name , this.email , this.password)
            let result = await axios.post(`${baseUlr}/api/v1/user/addUser`,{
                name:this.name,
                email:this.email,
                password:this.password
            })
            console.log('Result : ', result)
            if(result.status==201){
                console.warn('Signup Done')
            }
            localStorage.setItem("User-Info",JSON.stringify(result.data))
            this.$router.push({name:'BookData'})
        }

    },
    mounted(){

        let user = localStorage.getItem('User-Info');
        if(user){
            this.$router.push({name:'BookData'})
        }

    }
        
}

</script>
<style >

</style>