//rock-paper-scissors (rps)

function generateComputerChoice(){
    const r = Math.floor(Math.random()*3);
    let cpuChoice="";
    if (r === 1)
        cpuChoice = "rock";
    else if (r === 2)
        cpuChoice = "paper";
    else 
        cpuChoice = "scissors";
    return cpuChoice;
}

function getResult(userChoice, cpuChoice){
    if (userChoice === cpuChoice)
        return "Draw!"
    else if ((userChoice === "rock" && cpuChoice === "scissors") ||
             (userChoice === "paper" && cpuChoice === "rock") ||
             (userChoice === "scissors" && cpuChoice === "paper"))
            
        return "You Win!";
    else
        return "You Lose!";
}
const cpuChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

//get choice from user clicked button
let userChoice;
possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    //get the id of the element the user clicked
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    //make a choice for the computer
    cpuChoice = generateComputerChoice();
    cpuChoiceDisplay.innerHTML = cpuChoice;
    
    result = getResult(userChoice, cpuChoice);
    resultDisplay.innerHTML = result;
}));







