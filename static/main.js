let lvl =1
async function getclue(id,level){
     return fetch('http://localhost:9000/api/clue',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body    : JSON.stringify({"id":id,"level":level})  
    }).then((res)=>res.json()).then((res)=>res)
}

/////// LOAD STORY/////


async function getstory(level){
    return fetch("http://localhost:9000/story",{
        method:"POST",
        headers: {
                        'Content-Type': 'application/json',
                      },
        body : JSON.stringify({"level":parseInt(level)})
    }).then(data=>data.json()).then((data)=> data.story)
}

async function showstory(){
    // lvl = localStorage.level
    story = await getstory(1)
   const  storyp = await document.getElementById("story")
   storyp.innerText = await getstory(lvl)
//    console.log(storyp.innerText)
}
showstory()

async function showclue(){
    clueid = localStorage.id
    for(let i=1;i<=clueid;i++){
    c = document.getElementById(`c${i}`)
    clue =  await getclue(i,"1")
    c.innerText=clue.description
    document.getElementById("score").innerText=localStorage.score
    }
    clueid = parseInt(clueid)+1;
    localStorage.setItem("id",clueid)
    localStorage.setItem("score",parseInt(localStorage.score)-1)
}