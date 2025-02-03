let humanScore=0;
let computerScore=0;

const startBtn = document.querySelector("#startBtn");
const selectionBtn = document.querySelectorAll(".selectionBtn");
const buttonsContainer = document.querySelector(".buttons-container");

const computerMove = document.querySelector("#computer-move");
const humanMove = document.querySelector("#human-move");

const uiContainer = document.querySelector("#ui-container");
const startContainer = document.querySelector("#start-container");

const results = document.querySelector("#results");
const roundResult = document.querySelector("#round-result");
const finalResult = document.querySelector("#final-result");
const playAgainCont = document.querySelector("#play-again");
const playAgainBtn = document.querySelector("#play-again-button");

const yourScore = document.querySelector("#your-score");
const compScore = document.querySelector("#comp-score");

uiContainer.style.display = "none"; 
playAgainCont.style.display = "none";

function playGame() {
    startBtn.addEventListener("click", () => {
        uiContainer.style.display = "initial";
        startContainer.style.display = "none";
    });
};

playGame();

selectionBtn.forEach(button => {
    button.addEventListener("click",  (e) => {
    let playerChoice = e.target.id;
    humanMove.textContent = "Your choice: " + playerChoice;
    playRound(playerChoice, getComputerChoice());
       
     });
    
});

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
 
function getComputerChoice() {
    
    let computerChoice=getRandomInt(3);
      
    if (computerChoice===2) {
        computerMove.textContent = "Computer choice: scissors";
        return "scissors";
            } else if (computerChoice===1) {
                computerMove.textContent = "Computer choice: paper";
            return "paper";
    } else {
        computerMove.textContent = "Computer choice: rock";
        return "rock";
    }
}

function playRound(humanSelection, computerSelection) {
    
    switch(humanSelection) {
        case "rock":
            if (computerSelection ==="rock") {
                roundResult.textContent ="It's a tie!";              
            } else if (computerSelection==="paper"){
                roundResult.textContent = "You lose! Paper beats rock!";
                ++computerScore
            } else if (computerSelection==="scissors") {
                roundResult.textContent = "You win! Rock beats scissors";                
                ++humanScore
            }
            break;

        case "paper":
            if (computerSelection ==="rock") {
                roundResult.textContent = "It's a tie!";                
            } else if (computerSelection==="paper"){
                roundResult.textContent = "You win! Paper beats rock!";                
                ++humanScore
            } else if (computerSelection==="scissors") {
                roundResult.textContent = "You lose! Scissors beat paper";
                ++computerScore
            }
            break;

        case "scissors":
            if (computerSelection ==="rock") {
                roundResult.textContent = "You lose! Rock beats scissors";
                ++computerScore
            } else if (computerSelection==="paper"){
                roundResult.textContent = "You win! Scissors beat paper";
                ++humanScore
            } else if (computerSelection==="scissors") {
                roundResult.textContent = "It's a tie!";                
            }
            break;            
    };
    yourScore.textContent = "Your score: " + humanScore;
    compScore.textContent = "Computer score: " + computerScore;
    declareWinner();
}; 

 function declareWinner() {
    if(humanScore === 5) {
        finalResult.textContent = "Congratulations! You won the game!";
        buttonsContainer.style.display = "none";
        playAgainCont.style.display = "initial";  
    } else if (computerScore === 5) {
        finalResult.textContent = "You lost the game! Better luck next time."
        buttonsContainer.style.display = "none";
        playAgainCont.style.display = "initial"; 
    } 
};

playAgainBtn.addEventListener("click", playAgain); 

function playAgain() {
    humanScore=0;
    computerScore=0;
    computerMove.textContent = "Computer choice: ";
    humanMove.textContent = "Your choice: ";
    yourScore.textContent = "Your score: " + humanScore;
    compScore.textContent = "Computer score: " + computerScore;
    roundResult.textContent = "";
    finalResult.textContent = "";
    buttonsContainer.style.display = "initial";
    playAgainCont.style.display = "none";
};



   