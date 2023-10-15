const arr = ["Rock", "Scissors", 'Paper']

function getComputerChoice(){
    return arr[Math.floor(Math.random() * arr.length)];
}

let p_score = 0
let c_score = 0
function playgame(userinput){
    let result = ""
        let ComputerChoice = getComputerChoice(); 
// fix counter issues
        if ((userinput === "Rock" && ComputerChoice === "Scissors") ||
        (userinput == "Paper" && ComputerChoice === "Rock") || 
        (userinput == "Scissors" && ComputerChoice === "Paper")){
            p_score += 1
            result = (userinput + " Beats " + ComputerChoice + "You win! "  + "<br> Player score: " + p_score + "<br> Computer Score: " + c_score)
               
            if (p_score ==5){
                result+= '<br> You won the game!'
                c_score = 0;
                p_score = 0;}
            
        }
        else if (userinput == ComputerChoice){
            result = ("Its a tie! " + "<br> Player score: " + p_score + "<br> Computer Score: " + c_score)
        }

        else {
            result = ( ComputerChoice + " Beats " + userinput + "You Lose! "  + "<br> Player score: " + p_score + "<br> Computer Score: " + c_score)
            c_score += 1

            if (c_score ==5){
                result = ("Computer wins, You Lose")
                c_score = 0;
                p_score = 0;
            }
        }
         document.getElementById('result').innerHTML = result
         return   
        
        }
