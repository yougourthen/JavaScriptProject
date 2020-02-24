/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var score,roundScore,previousDice ,activePlayer, gamePlaying;


// math.random() gives a random number bettween 0 and 1 
//math.floor() gives a decimal part of a number

//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

//document.querySelector('#current-'+activePlayer).textContent = dice;

// read an ellement from the page
//var x = document.querySelector('#current-'+activePlayer).textContent;

//rinitialize game 
rinitializeGame ();

//Mofife the values of an css element tho change for exemple their style
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
var diceAccess = document.querySelector('.dice');

document.querySelector('.btn-roll').addEventListener('click',function (){
    if (gamePlaying){
    // 1-calculate the random number
   var dice = Math.floor(Math.random() * 6) + 1;

   // 2-change src image
   diceAccess.src = 'dice-' + dice + '.png';

   // 3-display the dice
   diceAccess.style.display = 'block'; 

   // 4- update the current score if dice is not a 1
   if (dice !== 1){

    roundScore = roundScore + dice; // can also write (roundScore+=  dice;)
document.querySelector('#current-'+activePlayer).textContent = roundScore;

   }else { //dice = 1

    // round score to 0 
    roundScore = 0; 
    //display the score 0
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    //change player and change player active in the interface
    changePlayer();
    
        }
    }
    
} );

    //When a player clik in HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){

    //add a cuurent score to the global score of the active player
    score[activePlayer] +=  roundScore;
    // roundscore to 0
    roundScore = 0;
 
    // test if the score is >= 100
    if (score[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'You Win!! ';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {

    //display the global score of the active player
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
    //display the round score 
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    //Hide the dice
    document.querySelector('.dice').style.display = 'none';
    //Change player
    changePlayer();
        }
    }
    
 });

    //When clicking at New Game Button
document.querySelector('.btn-new').addEventListener('click', rinitializeGame);


/**************************
 * Change Player Function
 *************************/

function changePlayer(){

    document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    document.querySelector('.player-' +activePlayer + '-panel').classList.add('active');

}


/**************************
 * Initialize GAME
 *************************/
function rinitializeGame(){
    var player = '';

    activePlayer = 0;
    roundScore = 0;
    score = [0,0];

    gamePlaying = true; /******** State Variable to stop the game if there is a
                                  winner and to force the palayer to reset the game */ 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    //Hide the Dice 
    document.querySelector('.dice').style.display = 'none';
    //remove the Winner State 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'Player 1' ;
    document.getElementById('name-1').textContent = 'Player 2' ;
    
    // Active the current player
    document.querySelector('.player-0-panel').classList.add('active');  

}




































































