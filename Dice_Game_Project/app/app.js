/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying,dices,counter;
init();

document.querySelector(".btn-roll").addEventListener("click", function(){
     if(gamePlaying){
          var diceNum = Math.floor(Math.random() * 6) + 1;
          
          
          var diceDOM = document.querySelector(".dice");
          diceDOM.src = "assets/dice-" + diceNum +".png";
          diceDOM.style.display = "block";
          
          if (diceNum !== 1){
               roundScore += diceNum;
               document.querySelector("#current-" + activePlayer).textContent = roundScore;
               /*if (counter === 0){
                    //console.log("dice number: "+diceNum);
                    dices[0] = diceNum;
                    counter++;
                    //console.log("counter: "+counter);
                    //console.log("first dice"+dices[0]);
                    
               }else{
                    //console.log("counter:"+counter);               
                    dices[1] = diceNum;
                    counter--;
                    //console.log("second dice"+dices[1]);               
                    if(dices[0] === dices[1]){
                         nextPlayer();
                    }
          }*/
          }else{
               //console.log("dice Number: "+diceNum);
               nextPlayer();
          }
     }   
});

document.querySelector(".btn-hold").addEventListener("click", function(){
     if(gamePlaying){
          scores[activePlayer] += roundScore;
          document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
          if(scores[activePlayer] >= 10)
          {
               document.querySelector("#name-" + activePlayer).textContent = "Winner!";
               document.querySelector(".dice").style.display = "none";
               document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
               document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
               gamePlaying = false;
          }else{
               nextPlayer();
          }
     } 
     
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;
     
     document.getElementById("current-0").textContent = "0";
     document.getElementById("current-1").textContent = "0";
     
     document.querySelector(".player-0-panel").classList.toggle("active");
     document.querySelector(".player-1-panel").classList.toggle("active");
     
     document.querySelector(".dice").style.display = "none";
}

function init(){
     scores = [0, 0];
     dices = [0, 0];
     roundScore = 0;
     activePlayer = 0; //0: first / 1: second player
     gamePlaying = true;
     counter = 0;
     
     // document.querySelector("#current-" + activePlayer).textContent = dice;
     // document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
     // var x = document.querySelector("#score-0").textContent;
     // console.log(x);
     
     document.querySelector(".dice").style.display = "none";
     
     document.getElementById("score-0").textContent = "0";
     document.getElementById("current-0").textContent = "0";
     document.getElementById("score-1").textContent = "0";
     document.getElementById("current-1").textContent = "0";
     document.getElementById("name-0").textContent = ("Player 1");
     document.getElementById("name-1").textContent = ("Player 2");
     document.querySelector(".player-"+0+"-panel").classList.remove("winner");
     document.querySelector(".player-"+1+"-panel").classList.remove("winner");
     document.querySelector(".player-"+0+"-panel").classList.add("active");
     
}