import {createRouter,createWebHistory} from 'vue-router'

import Home from './components/Home.vue'

const routes = [
    {
     name : "Home",
     path : "/Home",
     component : Home   
    }]




const router = createRouter({history : createWebHistory(),
routes})


export default router