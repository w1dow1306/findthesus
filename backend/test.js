const { json } = require("express")

console.clear()

async function getstory(level){
    story = fetch("http://localhost:9000/story",{
        method:"POST",
        headers: {
                        'Content-Type': 'application/json',
                      },
        body : JSON.stringify({"level":1})
    }).then(data=>data.json()).then((data)=>{
        console.log("\x1b[32m"+ data["story"])
        story  = data["story"]
    })
}
async function showstory(){
    var story = ""
    await getstory(1)
    storyp = document.getElementById("story")
   storyp.innerText = story
}

showstory()












// function getclue(id,level){
//     fetch('http://localhost:9000/api/clue',{
//         method:"POST",
//         headers: {
//             'Content-Type': 'application/json',
//           },
//         body    : JSON.stringify({"id":id,"level":level})  
//     }).then((res)=>{return res.json()}).then(data=>console.log(data)).catch(err=>console.log(err))
// }
// getclue(1,1)