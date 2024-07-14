const express = require("express");

const server = express()

server.get("/",(req,res)=>{
    res.send("Hello Bikash!!!")
})

server.listen(5000,()=>{
    console.log("Server is listening at port 5000")
})