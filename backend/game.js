const express = require('express');
const path  = require('path')
const fs = require('fs')
var bodyParser = require('body-parser')
const app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
    next()  
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
console.clear()

///////////////LOSAD CLUE

function loadclue(id,level) {
    const file  = fs.readFileSync('../data/clues.json','utf-8')
    const clues = JSON.parse(file);
    const clue = clues[level].find((clue)=> clue.id===id )
    if(clue){return clue}else{return null}
}

///////// LOAD STORY
 function loadstory(level){
    const stry = fs.readFileSync(path.join(__dirname,`/stories/${level}.txt`),'utf-8')
    const story  ={"level":level,"story":stry}
    return story
 }

app.post('/api/clue',async (req,res)=>{
    console.log("request recived to load clue ", req.body.id,req.body.level)
    await res.json( await loadclue(parseInt(req.body.id),req.body.level))
    // res.end(200)
})

app.post('/story',async(req,res)=>{
    console.log("request recived ", req.body.level)
    res.json( await loadstory(req.body.level))
//    res.end(200)
})
app.listen(9000,'0.0.0.0',()=>{
    console.log("THE backend is running");
})