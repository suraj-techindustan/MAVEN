import {createRouter,createWebHistory} from 'vue-router'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
const routes = [
    {
     name : "Home",
     path : "/Home",
     component : Home   
    },
    {
        name : "Login",
        path : "/Login",
        component : Login   
    },
    {
        name : "Signup",
        path : "/Signup",
        component : Signup   
    },
]




const router = createRouter({history : createWebHistory(),
routes})


export default router