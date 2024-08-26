let prompt = require('prompt-sync')()

prompt("WELCOME TO THE GAME")
let v1= prompt("PLAYER 1 : WHAT IS YOUR CHOICE STONE PAPER OR SCISSOR: ")
let v2= prompt("PLAYER 2 : WHAT IS YOUR CHOICE STONE PAPER OR SCISSOR: ")

if(v1.toLowerCase()==v2.toLowerCase())
{
    console.log("Match tie")
}

else{
    if((v1.toLowerCase()=="stone" && v2.toLowerCase()=="paper") ||(v1.toLowerCase()="paper" && v2.toLowerCase()=="scissor") || ((v1.toLowerCase()="scissor" && v2.toLowerCase()=="stone") ))
    {
        console.log("PLAYER 2 is the winner")
    }else{
        console.log("PLAYER 1 is the winner")
    }
}