import axios from "axios";  
const baseUlr = process.env.VUE_APP_ROOT_API;
// console.log("Process ======>", process, process.env, process.env.VUE_APP_BASE_URL)

export default axios.create({  
  // baseURL: "https://uiproject-01.herokuapp.com",  
  baseURL: baseUlr,  
  headers: {  
    "Content-type": "application/json"  
  }  
});


