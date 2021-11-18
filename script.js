
/* Game Rules

-The game has 2 players, playing in rounds 
-In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND SCORE
-But, if the player rolles a 1, all his ROOND score gets lost. After that, it's the next players turn 
-the player can choose to 'hold', which means that his Round score gets added to his GLOBAL score. 
after the, its's the next players turn
-The first player to reach 100 points on GLOBAL score wins the game
*/ 

var score, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;

//manipulating the css
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;


//annonymus function it doenst have a name and cant be reused
//the event listener for the roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random()*6) + 1;

    //2.Display the number 
    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png'; 

    //3. update the round score If the rolled number was not a 1
    if (dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();
    }
});
//event listener for the hold button 
document.querySelector('.btn-hold').addEventListener('click', function(){
        //add current score to Global score
            score[activePlayer] += roundScore;

        //update the UI
            document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];


        //check if the player won the game 
        if (score[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
             //next player
            nextPlayer();
        }
        
});

//next player function 
function nextPlayer(){
   
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0; //ternary operator for an if else statement
    roundScore = 0;
    document.getElementById('current-0').textcontent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}









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