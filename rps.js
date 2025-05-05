let humanScore = 0
let computerScore = 0

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

function getHumanChoice()
{
    return choice = prompt("Pick Rock, Paper or Scissors?");

}

    
function playRound(compchoice,humanchoice)
{
    let str = humanchoice.toUpperCase();

    if (str=="ROCK" && compchoice == "Paper")
    {computerScore++
        console.log("You lose! Paper beats Rock")
    }
    else if (str=="SCISSORS" && compchoice == "Rock")
    {computerScore++
        console.log("You lose! Rock beats Scissors")
    }
    else if (str=="PAPER" && compchoice == "Scissors")
    {computerScore++
        console.log("You lose! Scissors beat Paper")
    }
    else if (str=="SCISSORS" && compchoice == "Paper")
    {humanScore++
        console.log("You win! Scissors beat Paper")
    }
    else if (str=="PAPER" && compchoice == "Rock")
    {humanScore++
        console.log("You win! Paper beats Rock")
    }
    else if (str=="ROCK" && compchoice == "Scissors")
    {humanScore++
        console.log("You win! Rock beats Scissors")
    }
else
    {
        console.log("Thats a draw!")
    }

}


function playGame(){
  
    for(let i=0;i<5;i++){ 

    const humanchoice = getHumanChoice();
    const compchoice = getComputerChoice();
       playRound(compchoice,humanchoice);   
   }
   
   if(humanScore>computerScore)
   {console.log("You win!")}
   else if(computerScore>humanScore)
   {console.log("You lose")}
   else
   {console.log("Draw!")}

}

playGame()