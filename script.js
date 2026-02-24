function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return computerSelection = (choice == 0) ? computerSelection = 'Rock' :
    (choice == 1) ? computerSelection = 'Paper' :
    computerSelection = "Scissors" ;
    
}

const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
    return humanSelection = event.target.textContent
    });
});

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', getComputerChoice);
});

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', playGame);
});

function playGame() {
    playRound(humanSelection, computerSelection);
}


let humanScore = 0;
let computerScore = 0;
let rounds = 0

const gameResult = document.createElement('p');
const roundResult = document.createElement('p');

div.appendChild(roundResult);

const refresh = false; 

function playRound(humanSelection, computerSelection) {
    rounds += 1;

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

    roundResult.textContent = (`Your score: ${humanScore} - Computer score: ${computerScore}`);


    if (humanScore && !(humanScore % 5) || computerScore && !(computerScore % 5) ){
        gameResult.textContent = (result = (humanScore > computerScore) ?
        `You win! ${humanSelection} beats ${computerSelection}.` :
        `You lose! ${computerSelection} beats ${humanSelection}.`)
        div.appendChild(gameResult);

        humanScore = 0;
        computerScore = 0;
    } else {
        // roundResult.textContent = (`Your score: ${humanScore} - Computer score: ${computerScore}`);
        gameResult.textContent = '';
    }

    // if (!refresh) {
    // const node = document.createTextNode(`Human: ${humanSelection} vs Computer: ${computerSelection}`)
    // roundResult.appendChild(node);
    // } else roundResult.innerHTML = '', refresh = false;
    console.log(rounds, humanScore, computerScore, humanSelection, computerSelection);
    }

