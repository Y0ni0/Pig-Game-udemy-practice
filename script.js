
/* Game Rules

-The game has 2 players, playing in rounds 
-In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND SCORE
-But, if the player rolles a 1, all his ROOND score gets lost. After that, it's the next players turn 
-the player can choose to 'hold', which means that his Round score gets added to his GLOBAL score. 
after the, its's the next players turn
-The first player to reach 100 points on GLOBAL score wins the game
*/ 

var score, roundScore, activePlayer, gamePlaying ,previousDice, winningScore;

init();

//annonymus function it doenst have a name and cant be reused
//the event listener for the roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePlaying){
         //1. Random number
    var dice = Math.floor(Math.random()*6) + 1;
    var dice2 =Math.floor(Math.random()*6) + 1;
    //2.Display the number 
    var diceDom = document.querySelector('.dice')
    var diceDom2 = document.querySelector('.dice2');
    diceDom2.style.display = 'block';
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png'; 
    diceDom.src = 'dice-' + dice2 + '.png';

    //3. update the round score If the rolled number was not a 1
    if(dice === 6 && previousDice ===6){
        //player losses score
        score[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
    }else if (dice !== 1 && dice2!==1){
        //add score
        roundScore += dice + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();
       
    }
    previousDice = dice;
   }   
});
//event listener for the hold button 
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //add current score to Global score
        score[activePlayer] += roundScore;

        //update the UI
            document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
            var input = document.querySelector('.final-score').value;

            //undefined , 0, null or "" are coerced to false
            //anything else is coerced t true 
            if(input){
                winningScore = input;
            }
            else{
                winningScore = 30; 
            }

        //check if the player won the game 
        if (score[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false; 
        } else {
             //next player
            nextPlayer();
        } 
    }    
    
});

//next player function 
function nextPlayer(){
   
    activePlayer === 1 ? activePlayer =0 : activePlayer = 1; //ternary operator for an if else statement
   {roundScore = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
   }

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}
//new game button 

document.querySelector('.btn-new').addEventListener('click', function(){
    init();
});

//init function

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    //manipulating the css
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



/*
coding challenges

1. A player looses his entire score when he rolls two 6 in a row. after that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change 
the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. this is a 
good oportunity to use google to figure out this out:)
3. Add another dice to the game, so that there are two dices now. The player looses his current score
when one of them is a 1. (Hint; you will need css to position the second dice, so take a look at the css
code for the first one.)



//setter
//sdocument.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';

//getter
//var x = document.querySelector('#score--0').textContent;
//console.log(x);

/*function btn(){
    //do something here
}
btn();

document.querySelector('btn btn--roll').addEventListener('click', btn); 
//callback function it can be reused and it has a name
*/