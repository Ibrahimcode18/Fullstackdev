let hands = ["rock", "paper", "scissor"]

function Game (array){
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(array[randomNumber])
}

Game(hands)