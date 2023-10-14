const arr = ["Rock", "Scissors", 'Paper']

function getComputerChoice(){
    return arr[Math.floor(Math.random() * arr.length)];
}


function playgame(userinput){
    let p_score = 0
    let c_score = 0
            let ComputerChoice = getComputerChoice();

            if (userinput === "Rock" && ComputerChoice === "Scissors"){
            output.innerHTML =  "Rock beats Scissors you win"; p_score ++;
            }
            else if (userinput === "Rock" && ComputerChoice === "Paper"){
            output.innerHTML =  "Paper beats Rock you lose"; c_score ++;
            }
            else if (userinput === "Paper" && ComputerChoice === "Rock"){
            output.innerHTML =  "Paper beats Rock you Win";p_score ++;
            }
            else if (userinput === "Paper" && ComputerChoice === "Scissors"){
            output.innerHTML =  "Scissors beats Paper you lose"; c_score ++; 
            }
            else if (userinput === "Scissors" && ComputerChoice === "Paper"){
            output.innerHTML =  "Scissors beats Paper you win"; p_score ++; 
            }
            else if (userinput === "Scissors" && ComputerChoice === "Rock"){
                output.innerHTML =  "Rock beats Scissors you Lose"; c_score ++;
            }
            else if (userinput == ComputerChoice){
                output.innerHTML =  "Its a Tie!";
            }
            else{output.innerHTML = "Not valid"}
            
            pscore.innerHTML = p_score;
            cscore.innerHTML = c_score;

            if (p_score === 5){
                pnotif.innerHTML = "You won 5 you won"
            }
            else if (c_score === 5){
                cnotif.innerHTML = "You lost 5 you lose"
            }
        }