<template>
<div class="register">        
    <h2>SignUP Page..</h2>
    <input type="text" name="name" v-model="name" placeholder="Enter name">
    <input type="text" name="email" v-model="email" placeholder="Enter email">
    <input type="password" name="password" v-model="password" placeholder="Enter password">
    <div class="button_div">
    <div class="sigup_button">
    <button @click="signup" >Signup</button>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios'

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
            let result = await axios.post('http://localhost:3000/user',{
                name:this.name,
                email:this.email,
                password:this.password
            })
            console.log('Result : ', result)
            if(result.status==201){
                console.warn('Signup Done')
            }
            localStorage.setItem("User-Info",JSON.stringify(result.data))
        }

    }
        
}

</script>
<style >
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin: 0px auto 30px auto;
}
.register h2{
    color:skyblue;
}

.button_div{
    align-items: center;
    justify-content: center;
    display: flex;

}

.sigup_button button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    font-size: 22px;
    border-color: skyblue;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
}


</style>