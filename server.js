const express = require('express')
const path = require('path')
console.clear()
const app = express()
app.use(express.static(path.join(__dirname,'./static')))


app.get('/',(req,res)=>{
    console.log("THe sever was requested by ")
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(8080,'0.0.0.0',()=>{
    console.log("THe server is up and running")
})