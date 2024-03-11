
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




////////////// Defining properties of plaeyyeyeyers
class player{
    constructor(name,score,username,level){
        this.name  = name;
        this.score = score;
        this.username = username;
        this.level = level;
    }
    updatescore() {
        this.score = this.score+1;
    }
}

const test = new player(null,null,null,null)
// const test1 = new player(null,null,213,1213)


function loadData() {
    try {
      const data = fs.readFileSync('./data/database.json', 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading data:', error);
      return [];
    }
} 

const players = loadData()


////////////// Registering user
function register(){
    rl.question("Have you logged in before? => ",(p)=>{
        if(p=="y" || p =="Y"){
            rl.question("Enter your username: ",(usrnm)=>{
                if(players.some(player => player.username === usrnm)){
                    console.log("waaahh i know you!!!!");
                }else{
                    console.log("Who the fck are you???");
                }
                rl.close()
            })
        }else{
            rl.question("What is your name: ",(nm)=>{
                test.name = nm;
                rl.question("what is your username: ",(usr)=>{
                    test.username = usr;
                    test.level = 1;
                    test.score = 0;
                    players.push(test)
                    fs.writeFileSync('./data/database.json', JSON.stringify(players, null, 2));
                    rl.close()
                })
            })
        }
    })
}

// register()



///////// main game ////////////

/// LOAD STORYRYRYR


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
sho

