import axios from "axios";  

// console.log("Process ======>", process, process.env, process.env.VUE_APP_BASE_URL)

export default axios.create({  
  // baseURL: "https://uiproject-01.herokuapp.com",  
  baseURL: "http://e0fb-45-248-157-179.ngrok.io",  
  headers: {  
    "Content-type": "application/json"  
  }  
});


