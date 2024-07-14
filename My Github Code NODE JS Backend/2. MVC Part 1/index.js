import express from 'express'

const server = express()

server.use(express.static('src/views')) // Check at http://localhost:3400/products.html

server.listen(3400,()=>{
    console.log("Server is listening at port 3400")
})