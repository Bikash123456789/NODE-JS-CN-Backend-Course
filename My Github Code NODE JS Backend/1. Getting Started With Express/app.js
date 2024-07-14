const express = require("express");

const app = express()

//Middleware1
app.get("/",(req,res,next)=>{
    console.log("Hello from middleware1")
    next()
})

//Middleware2
app.get("/",(req,res,next)=>{
    console.log("Hello from middleware2")
    next()
})

//Middleware3
app.get("/",(req,res,next)=>{
    res.send("Ending response from middleware3")
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000")
})