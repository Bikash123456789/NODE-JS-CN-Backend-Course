const express = require("express");

const app = express()


app.get("/",(req,res)=>{
    res.set('Content-Type','text/plain')
    res.status(201).send("Ending response from middleware3")
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000")
})