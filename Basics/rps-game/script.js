console.log("hello world");

const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");

let playerCount = 0;
let computerCount = 0;
const maxpoints = 5;

rock.addEventListener('click', function (e) {
    setPlayerChoice(e.target.dataset.num);
});
paper.addEventListener('click', function (e) {
  setPlayerChoice(e.target.dataset.num);
});
scissors.addEventListener('click', function (e) {
  setPlayerChoice(e.target.dataset.num);
});

function setPlayerChoice(choice){
    playRound(choice, getComputerChoice())
}

function checkGameOver(){
    maxpoints
    if (playerCount >= maxpoints || computerCount >= maxpoints){
        if (playerCount > computerCount){
            alert("You won!");
        }
        if (computerCount > playerCount){
            alert("You lost!");
        }
        playerCount = 0;
        computerCount = 0;
        displayResults("Try again!", null);
    }
}

function displayResults(result, point){
    const resultsp = document.getElementById('results');
    resultsp.replaceChildren(result);
    
    const scorep = document.getElementById('score');
    if(point == 1){playerCount++;}
    if(point == 0){computerCount++;}
    const scorediv = document.createElement('div')
    scorediv.textContent = playerCount + " " + computerCount;
    scorep.replaceChildren(scorediv);
    checkGameOver();
}

function getComputerChoice() {
    let result;

    // getting number between 1 and 3
    let number = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    // sets number to name of result
    if (number == 1) {
        result = "Rock";
    }
    if (number == 2) {
        result = "Paper";
    }
    if (number == 3) {
        result = "Scissors";
    }

    //console.log(result);
    return result;
}

function playRound(playerSelection, computerSelection) {

    // sets players number to name of result
    if (playerSelection == 1) {
        playerSelection = "Rock";
    }
    if (playerSelection == 2) {
        playerSelection = "Paper";
    }
    if (playerSelection == 3) {
        playerSelection = "Scissors";
    }

    // deciding winnner
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        displayResults("You won! -> Rock > Scissors", 1);
        return ("You won! -> Rock > Scissors");
    }
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        displayResults("You lost! -> Rock < Paper", 0);
        return ("You lost! -> Rock < Paper");
    }
    if (playerSelection == "Paper" && computerSelection == "Scissors") {
        displayResults("You lost! -> Paper < Scissors", 0);
        return ("You lost! -> Paper < Scissors");
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        displayResults("You won! -> Paper > Rock", 1);
        return ("You won! -> Paper > Rock");
    }
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        displayResults("You lost! -> Scissors < Rock", 0);
        return ("You lost! -> Scissors < Rock");
    }
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        displayResults("You won! -> Scissors > Paper", 1);
        return ("You won! -> Scissors > Paper");
    }
    //i think there should be a tie case as well
    if (playerSelection == computerSelection) {
        displayResults("It's a tie!");
        return ("It's a tie");
    }


}

