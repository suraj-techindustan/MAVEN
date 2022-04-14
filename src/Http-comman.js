import axios from "axios";  
  
export default axios.create({  
  baseURL: "https://uiproject-01.herokuapp.com",  
  headers: {  
    "Content-type": "application/json"  
  }  
});


