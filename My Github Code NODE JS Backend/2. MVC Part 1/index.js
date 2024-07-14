import express from 'express';
import path from 'path'

const server = express()

server.use(express.static('src/views')) // Check at http://localhost:3400/products.html

server.get("/",(req,res)=>{
    res.sendFile(path.join(path.resolve(),'src','views','products.html'))
})

server.listen(3400,()=>{
    console.log("Server is listening at port 3400")
})