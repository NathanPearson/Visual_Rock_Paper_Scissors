const buttons = document.querySelectorAll('button');
let plyr = 0; 
let com = 0; 
let drw = 0;
const end = document.querySelectorAll('.end');
const option = document.querySelectorAll('.option');
end.forEach((element) => {
    hide(element);
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {        
        if(button.id == 'play') {                      
            buttons.forEach(btn => btn.disabled = false);
            hide(button);            
        } else if (button.id == 'reset') {
            plyr = 0; com = 0; drw = 0;
            buttons.forEach(btn => btn.disabled = false);
            end.forEach((element) => {
                hide(element);
            });
        } else {
            let playerChoice = button.id;
            let computerChoice = computerPlay();
            round = playRound(playerChoice, computerChoice);
            game(round);
        }
    });
});

function computerPlay () {
    play = ["Rock", "Paper", "Scissors"];    
    return play[Math.floor(Math.random() * 3)];
}
function playRound (playerSelection, computerSelection) {
    let result;
    switch(playerSelection.toLowerCase()) {
        case 'rock': {
            switch (computerSelection) {
                case 'Rock': {
                    result = 'd';
                    console.log("Alright, we'll call it a draw!");
                    break;
                }
                case 'Paper': {
                    result = 'l';
                    console.log("You lose!");
                    break;
                }
                case 'Scissors': {
                    result = 'w';
                    console.log("Winner!!!");
                    break;
                }
            }                    
            break;
        }
        case 'paper': {
            switch (computerSelection) {
                case 'Rock': {
                    result = 'w';
                    console.log("Winner!!!");
                    break;
                }
                case 'Paper': {
                    result = 'd';
                    console.log("Alright, we'll call it a draw!");
                    break;
                }
                case 'Scissors': {
                    result = 'l';
                    console.log("You lose!");
                    break;
                }
            }
            break;
        }
        case 'scissors': {
            switch (computerSelection) {
                case 'Rock': {
                    result = 'l';
                    console.log("You lose!");
                    break;
                }
                case 'Paper': {
                    result = 'w';
                    console.log("Winner!!!");
                    break;
                }
                case 'Scissors': {
                    result = 'd';
                    console.log("Alright, we'll call it a draw!");
                    break;
                }
            }
            break;
        }
        default: {
            result = 'Error';                    
        }                
    }//end switch
    return result;
}

function game (res) {
    switch (res) {
        case 'd':
            drw++;                            
            break;
        case 'w':
            plyr++;
            break;
        case 'l':
            com++;
            break;
        default:
            break;
    }
    console.log('w = ' + plyr + ' L = ' + com + ' D = ' + drw);
    if(plyr == 5 || com == 5){
        let resMessage;
    
        if(plyr > com) {                
            resMessage = 'You have won!';        
        } else if (com > plyr) {
            resMessage = 'You have lost!';
        }
        document.getElementById('result').textContent = resMessage;
        document.getElementById('win').textContent = "You won " + plyr + " round(s).";
        document.getElementById('loss').textContent = "You lost " + com + " round(s).";
        document.getElementById('draw').textContent = "You tied " + drw + " round(s).";
        console.log(resMessage);
        option.forEach((opt) => {
            opt.disabled = true;
        });
        end.forEach((element) => {
            show(element);
        });

    }
}

function show (element) {
    element.classList.remove('remove');
}

function hide (element) {
    element.classList.add('remove');
}