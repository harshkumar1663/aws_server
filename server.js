const express = require('express')
const app = express()

app.get('/api/test' , (req,res) => {
    res.json({message:'API call successful'})
    console.log("Received API CALL !!!!!!!!!!!!")
})

app.listen(3100,  ()=>{
console.log("Running on port 3100")})