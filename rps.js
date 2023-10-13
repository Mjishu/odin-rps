const arr = ["Rock", "Scissors", 'Paper']

function getComputerChoice(){
    return arr[Math.floor(Math.random() * arr.length)];
}


function playgame(userinput){
    let ComputerChoice = getComputerChoice();

    if (userinput === "Rock" && ComputerChoice() === "Scissors"){
        return "Rock beats Scissors you win";
    }
    else if (userinput === "Rock" && ComputerChoice() === "Paper"){
        return "Paper beats Rock you lose";
    }
    else if (userinput === "Paper" && ComputerChoice() === "Rock"){
        return "Paper beats Rock you Win";
    }
    else if (userinput === "Paper" && ComputerChoice() === "Scissors"){
        return "Scissors beats Paper you lose";
    }
    else if (userinput === "Scissors" && ComputerChoice() === "Paper"){
        return "Scissors beats Paper you win";
    }
    else if (userinput === "Scissors" && ComputerChoice() === "Rock"){
        return "Rock beats Scissors you Lose";
    }
    else if (userinput == ComputerChoice()){
        return "Its a Tie!"
    }
    else{return "Not valid"}
}