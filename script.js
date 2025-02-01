let humanScore=0;
let computerScore=0;

function getHumanChoice(){
    let userInput=prompt("Rock, paper or scissors?").toLowerCase();
    
    if (userInput==="rock" ||  userInput==="paper" || userInput==="scissors") {
        console.log("Your choice:" + userInput)
        return userInput;
        }
        alert("Wrong input. Choose etiher rock, paper or scissors.");
        getHumanChoice();
}

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
    sum.textContent = "Score:" + humanScore + ":" + computerScore
    
}

        const rockBtn = document.querySelector("#rockBtn");
        rockBtn.addEventListener("click",  () =>{
        playRound("rock", getComputerChoice());
        
        });
    
        const paperBtn = document.querySelector("#paperBtn");
        paperBtn.addEventListener("click", () =>{
            playRound("paper", getComputerChoice())
            });
    
        const scissorsBtn = document.querySelector("#scissorsBtn");
        scissorsBtn.addEventListener("click", () =>{
            playRound("scissors", getComputerChoice())
            });    


 function declareWinner() {
    if(humanScore > computerScore) {
    console.log("You win!");
} else if (humanScore<computerScore) {
    console.log("Computer wins!");
} else {
    console.log("It's a tie!");
}
    console.log("You vs. computer:  " + humanScore + ":" + computerScore)
} 