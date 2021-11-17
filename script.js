
/* Game Rules

-The game has 2 players, playing in rounds 
-In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND SCORE
-But, if the player rolles a 1, all his ROOND score gets lost. After that, it's the next players turn 
-the player can choose to 'hold', which means that his Round score gets added to his GLOBAL score. 
after the, its's the next players turn
-The first player to reach 100 points on GLOBAL score wins the game
*/ 

var score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random()*6) + 1;

//setter
document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';

//getter
var x = document.querySelector('#score--0').textContent;
console.log(x);

//manipulating the css
document.querySelector('.dice').style.display = 'none';
