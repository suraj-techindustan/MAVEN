import {createRouter,createWebHistory} from 'vue-router'

// import Home from './components/Home.vue'
// import Login from './components/Login.vue'
// import Signup from './components/Signup.vue'
// import BookData from './components/BooksData.vue'
import ShopPage from './components/ShopPage.vue'

const routes = [
//     {
//      name : "Home",
//      path : "/",
//      component : Home   
//     },
//     {
//         name : "Login",
//         path : "/Login",
//         component : Login   
//     },
//     {
//         name : "Signup",
//         path : "/Signup",
//         component : Signup   
//     },

//     {   name : "BookData",
//         path : "/BookData",
//         component : BookData   
//     },

    {   name : "ShopPage",
        path : "/ShopPage",
        component : ShopPage   
    },
  
]

const router = createRouter({history : createWebHistory(),
routes})


export default router