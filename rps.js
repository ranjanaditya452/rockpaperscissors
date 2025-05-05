let humanScore = 0
let computerScore = 0
let roundCount =0

function getComputerChoice()
{
    let ran = Math.floor(Math.random() * 3);

    if(ran===0)
    {
        return "Rock";
    }
    else if (ran ===1)
    {
        return "Paper";
    }
    else if (ran===2)
    {
        return "Scissors";
    }

}
    
function playRound(compchoice,humanchoice)
{
    let str = humanchoice.toUpperCase();
    if (roundCount==5)
    {
        declareResult();
    }
    else if (str=="ROCK" && compchoice == "Paper")
    {computerScore++
     roundCount++
        console.log("You lose! Paper beats Rock")
    }
    else if (str=="SCISSORS" && compchoice == "Rock")
    {computerScore++
        roundCount++
        console.log("You lose! Rock beats Scissors")
    }
    else if (str=="PAPER" && compchoice == "Scissors")
    {computerScore++
        roundCount++
        console.log("You lose! Scissors beat Paper")
    }
    else if (str=="SCISSORS" && compchoice == "Paper")
    {humanScore++
        roundCount++
        console.log("You win! Scissors beat Paper")
    }
    else if (str=="PAPER" && compchoice == "Rock")
    {humanScore++
        roundCount++
        console.log("You win! Paper beats Rock")
    }
    else if (str=="ROCK" && compchoice == "Scissors")
    {humanScore++
        roundCount++
        console.log("You win! Rock beats Scissors")
    }
else
    {   roundCount++
        console.log("Thats a nil or a draw!")
    }

}


let  mainButton = document.querySelector(".buttons")
mainButton.addEventListener('click',(event)=>
    { 
        let target = event.target.id;
        switch(target)
        {
            case 'rock':
                playRound(getComputerChoice(),"rock");
                break;
            case 'paper':
                playRound(getComputerChoice(),"paper");
                break;
            case 'scissor':
                playRound(getComputerChoice(),"scissors");
                break;
        }


    })

let winner;



function declareResult(){
if(computerScore>humanScore)
    {
        winner = "Computer"
    }
    else if (humanScore>computerScore)
    {
        winner = "Human";
    }
    else
    {
        winner = "Draw!"
    }   
let resultFinal = document.querySelector(".results");
resultFinal.textContent = `The final winner is ${winner}`;}