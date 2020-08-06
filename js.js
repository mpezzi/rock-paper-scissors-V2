makeScoreBox = () => {
    const container = document.querySelector('#score-box');
    const div = document.createElement('div');
    div.classList.add('scoreBox');
    const h3 = document.createElement('h3');
    h3.textContent = 'I’m in a div';
    div.appendChild(h3);
    div.setAttribute('style', 'border: black 1px solid; background-color: pink')
    container.appendChild(div);
};

const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        makeScoreBox();
        console.log("YOU WIN!");
        return playerScore += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        makeScoreBox();
        console.log("...you lose...");
        return computerScore += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        makeScoreBox();
        console.log("...you lose...");
        return computerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        makeScoreBox();
        console.log("YOU WIN!");
        return playerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        makeScoreBox();
        console.log("...you lose...");
        container.appendChild(div);
        return computerScore += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        makeScoreBox();
        console.log("YOU WIN!");
        container.appendChild(div);
        return playerScore += 1;

    } else {
        makeScoreBox();
        console.log("It's a tie");
    };
    return;
};


// Player selection
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        const computerSelection = choices[Math.floor(Math.random()*choices.length)];
        playRound(playerSelection, computerSelection);
    });
});

// Plays a 5 round game
// function game() {
//     for (let i = 0; i < 5; i++) {
//         const computerSelection = choices[Math.floor(Math.random()*choices.length)];
//         playRound(playerSelection, computerSelection);
//     };
//     return;
// };
// game();

// The DOMContentLoaded event fires when the initial HTML document has been
// completely loaded and parsed, without waiting for stylesheets, images, and
// subframes to finish loading.
// @see: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
    makeScoreBox();
});
