let humanScore=0;
let computerScore=0;

const selectionBtn = document.querySelectorAll(".selectionBtn");
const totalScore = document.querySelector("#totalScore");
const resultList = document.querySelector("#resultList");
const sum = document.createElement("h3");

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
 
function getComputerChoice() {
    const computer = document.createElement("div");
    resultList.appendChild(computer);

    let computerChoice=getRandomInt(3);
      
    if (computerChoice===2) {
        computer.textContent = "Computer choice: scissors";
        return "scissors";
            } else if (computerChoice===1) {
                computer.textContent = "Computer choice: paper";
            return "paper";
    } else {
        computer.textContent = "Computer choice: rock";
        return "rock";
    }
}

function playRound(humanSelection, computerSelection) {
    
    totalScore.appendChild(sum);
    sum.textContent = "";

    let roundResult = document.createElement("li");
    resultList.appendChild(roundResult); 

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
            
    }
    sum.textContent = "Score: " + humanScore + ":" + computerScore
    
}

        
    selectionBtn.forEach(button => {
        button.addEventListener("click",  (e) => {
        let playerChoice = e.target.id;
        playRound(playerChoice, getComputerChoice());         
         });
    });

 function declareWinner() {
    
    }

   