const express = require("express");

const app = express()


app.get("/",(req,res)=>{
    res.set('Content-Type','text/plain')
    res.status(201).send("Ending response from middleware3")
})

app.post('/', (req, res) => {
    res.send('POST request received')
    });
    
app.put('/', (req, res) => {
    res.send('PUT request received')
    });

app.delete('/', (req, res) => {
    res.send('DELETE request received')
    });  


app.use(express.static('public'))
    

app.listen(5000,()=>{
    console.log("Server is listening at port 5000")
})