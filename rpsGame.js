
let winsCounter = 0
let lossesCounter = 0

const buttons = document.getElementById('buttons')

const results = document.getElementById('gameDisplay')
results.classList.add('results')
results.classList.add('counter')
const wins = document.getElementById('wins')
wins.textContent = winsCounter
const losses = document.getElementById('losses')
losses.textContent = lossesCounter
buttons.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id){
        case 'rock':
            selectMove('Rock')
            break;
        case 'paper':
            selectMove('Paper');
            break;
        case 'scissors':
            selectMove('Scissors')
            break;
    }
})

function selectMove(str){
    let gameString = playGame(str);
            results.textContent = gameString;
            if(gameString[4] === "w"){
               
                winsCounter = winsCounter + 1
                wins.textContent = winsCounter
                if(winsCounter>4){
                    results.textContent = "Game over... You win!"
                    winsCounter = 0
                    lossesCounter = 0
                    losses.textContent = lossesCounter
                    wins.textContent = winsCounter
                    
                }
              
            }
            else if(gameString[4] === "l"){
               
                lossesCounter = lossesCounter + 1
                losses.textContent = lossesCounter
                if(lossesCounter>4){
                    results.textContent = "Game over... You lose!"
                    lossesCounter = 0
                    winsCounter = 0
                    wins.textContent = winsCounter
                    losses.textContent = lossesCounter
                }
           
            }
            else{
                
              
            }
            
}

function playGame(player){
    let computer = getComputer()
    if(player === "Rock"){
        if(computer === "Paper"){
            return "You lose: paper beats rock"
        }
        else if(computer === "Rock"){
            return "Tie: both chose rock"
        }
        else{
            return "You win: rock beats scissors"
        }
    }
    else if(player === "Paper"){
        if(computer === "Paper"){
            return "Tie: both chose paper"
        }
        else if(computer === "Scissors"){
            return "You lose: Scissors beats paper"
        }
        else{
            return "You win: Paper beats rock"
        }
    }
    else if(player === "Scissors"){
        if(computer === "Scissors"){
            return "Tie: both chose scissors"
        }
        else if(computer === "Rock"){
            return "You lose: rock beats scissors"
        }
        else{
            return "You win: Scissors beats paper" 
        }
    }
}

function getComputer(){
    options = ["Rock","Paper","Scissors"]
    option = (Math.floor(Math.random() * (3-0) + 0))
    return options[option]

}

