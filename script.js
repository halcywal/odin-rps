function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return computerChoice = (choice == 0) ? computerChoice = 'Rock' :
    (choice == 1) ? computerChoice = 'Paper' :
    computerChoice = "Scissors" ;
}

function getHumanChoice() {
    choice = prompt('make your choice!', '');
    return humanChoice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0

playGame();

function playGame() {   

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);                  

    if (rounds == 4) {
        console.log(result = (humanScore > computerScore) ?
        `You win! ${humanSelection} beats ${computerSelection}.` :
        `You lose! ${computerSelection} beats ${humanSelection}.`) 
    } 

    else {
        rounds += 1;
        console.log('rounds: ' + rounds)
        playGame();
    }

    function playRound(humanSelection, computerSelection) {
    if (humanSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            computerScore += 1;
        }
        if (computerSelection == 'Scissors') {
            humanScore += 1;
        }
    }

    if (humanSelection == 'Paper') {
        if (computerSelection == 'Scissors') {
            computerScore += 1;
        }
        if (computerSelection == 'Rock') {
            humanScore += 1;
        }
    }

    if (humanSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            computerScore += 1;
        }
        if (computerSelection == 'Paper') {
            humanScore += 1;
        }
    }
    console.log(humanScore, computerScore, humanSelection, computerSelection);
    }
}
