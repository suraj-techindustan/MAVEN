const express = require('express');
const app = express()
const Router = require('./Routes/Router')
const dotenv = require('dotenv');
dotenv.config()
const Port = process.env.PORT
const DB = process.env.DB
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect(DB,{ useNewUrlParser : true , useUnifiedTopology : true})
.then(console.log('Connected To DataBase '))
.catch(err=>(console.log(`Failed To connect ${err}`)))



app.use('/',Router.Router)
app.listen(Port,()=>(console.log(`Listening To PORT : ${Port}`)))