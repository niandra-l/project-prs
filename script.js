let humanScore=0;
let computerScore=0;

const startBtn = document.querySelector("#start-button");
const selectionBtn = document.querySelectorAll(".selection-button");
const buttonsContainer = document.querySelector(".buttons-container");

const computerMove = document.querySelector("#computer-move");
const humanMove = document.querySelector("#human-move");

const uiContainer = document.querySelector(".ui-container");
const startContainer = document.querySelector(".start-container");

const roundResult = document.querySelector("#round-result");
const finalResult = document.querySelector("#final-result");
const totalScore = document.querySelector("#total-score");
const summary = document.querySelector(".summary");
const playAgainBtn = document.querySelector("#play-again-button");

const yourScore = document.querySelector("#your-score");
const compScore = document.querySelector("#comp-score");
const yourFinalScore = document.querySelector("#your-final-score");
const compFinalScore = document.querySelector("#comp-final-score");

uiContainer.style.display = "none"; 
summary.style.display = "none";

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
    playRound(playerChoice, getComputerChoice());
       
     });
    
});

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
 
function getComputerChoice() {
    
    let computerChoice=getRandomInt(3);
      
    if (computerChoice===2) {
        document.getElementById("computer-image").src = "/images/scissors.png";
        return "scissors";
            } else if (computerChoice===1) {
                document.getElementById("computer-image").src = "/images/paper.png";
            return "paper";
    } else {
        document.getElementById("computer-image").src = "/images/rock.png";
        return "rock";
    }
}

function playRound(humanSelection, computerSelection) {
    
    switch(humanSelection) {
        case "rock":
            document.getElementById("human-image").src = "/images/rock.png";
            if (computerSelection ==="rock") {
                roundResult.textContent ="It's a tie!";              
            } else if (computerSelection==="paper"){           
                roundResult.textContent = "You lose! Paper beats rock!";
                ++computerScore
            } else if (computerSelection==="scissors") {   
                roundResult.textContent = "You win! Rock beats scissors.";                
                ++humanScore
            }
            break;

        case "paper":
            document.getElementById("human-image").src = "/images/paper.png";
            if (computerSelection ==="paper") {
                roundResult.textContent = "It's a tie!";                
            } else if (computerSelection==="rock"){
                roundResult.textContent = "You win! Paper beats rock!";                
                ++humanScore
            } else if (computerSelection==="scissors") {
                roundResult.textContent = "You lose! Scissors beat paper.";
                ++computerScore
            }
            break;

        case "scissors":
            document.getElementById("human-image").src = "/images/scissors.png";
            if (computerSelection ==="rock") {
                roundResult.textContent = "You lose! Rock beats scissors.";
                ++computerScore
            } else if (computerSelection==="paper"){
                roundResult.textContent = "You win! Scissors beat paper.";
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
        uiContainer.style.display = "none";
        summary.style.display = "initial";
        yourFinalScore.textContent = "Your score: " + humanScore;
        compFinalScore.textContent = "Computer score: " + computerScore;
        finalResult.textContent = "Congratulations! You won the game!";
        finalResult.setAttribute("style", "color: #4c9f4f");
          
    } else if (computerScore === 5) {
        uiContainer.style.display = "none";
        summary.style.display = "initial"; 
        yourFinalScore.textContent = "Your score: " + humanScore;
        compFinalScore.textContent = "Computer score: " + computerScore;
        finalResult.textContent = "You lost the game! Better luck next time.";
        finalResult.setAttribute("style", "color: #f46363");
    } 
};

playAgainBtn.addEventListener("click", playAgain); 

function playAgain() {
    humanScore=0;
    computerScore=0;
    uiContainer.style.display = "initial";
    yourScore.textContent = "Your score: " + humanScore;
    compScore.textContent = "Computer score: " + computerScore;
    roundResult.textContent = "";
    finalResult.textContent = "";
    summary.style.display = "none";
    
    
};



   