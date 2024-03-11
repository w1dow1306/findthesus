let clueid=0
let score =0
let lvll = 0
if(localStorage.id&&localStorage.level&&localStorage.score){
    clueid = localStorage.id
    score = localStorage.score
    lvl = localStorage.level
}else{
    clueid  =1
    localStorage.setItem("id",1)
    localStorage.setItem("level",1)
    localStorage.setItem("score",10)
}
document.getElementById("score").innerText=localStorage.score
function cleardata(){
    localStorage.clear()
}
