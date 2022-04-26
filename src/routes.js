import {createRouter,createWebHistory} from 'vue-router'

// import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import BookData from './components/BooksData.vue'
import ShopPage from './components/ShopPage.vue'


const routes = [
        {
            name : "Signup",
            path : "/signup",
            component : Signup   
        },
        // {
        // name : "Home",
        // path : "/",
        // component : Home    
        // },
    {
        name : "Login",
        path : "/login",
        component : Login   
    },

    {   name : "BookData",
        path : "/",
        component : BookData   
    },

    {   name : "ShopPage",
        path : "/shopPage",
        component : ShopPage   
    },
  
  
]

const router = createRouter({history : createWebHistory(),
routes})


export default router