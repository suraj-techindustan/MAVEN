import axios from "axios";  

// console.log("Process ======>", process, process.env, process.env.VUE_APP_BASE_URL)

export default axios.create({  
  // baseURL: "https://uiproject-01.herokuapp.com",  
  baseURL: "https://maven-backend-62w3ju80o-suraj-techindustan.vercel.app/",  
  headers: {  
    "Content-type": "application/json"  
  }  
});


