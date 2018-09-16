<<<<<<< HEAD
const rock='Rock';
const paper='Paper';
const scissors='Scissors'; 
let aiHand = gameRoll();
var playerHand = undefined;

var rockButton = document.querySelector("#rock");
var paperButton = document.querySelector("#paper");
var scissorsButton = document.querySelector("#scissors");
var playButton = document.querySelector("#play");
var resultOutput = document.querySelector("#result");

rockButton.addEventListener("click", function()
{
    playerHand = rock;
});

paperButton.addEventListener("click", function()
{
    playerHand = paper;
});

scissorsButton.addEventListener("click", function()
{
    playerHand = scissors;
});

playButton.addEventListener("click", function()
{
    if(playerHand === undefined)
    {
        alert("You need to pick before you can play!");
    }
    else
    {
        gameLogic();
    }
    
})

function gameRoll()
{
    let ai = Math.floor(Math.random() * 9) + 1;
    const roll = ai;
    if(roll<=3)
    {
        return rock;
    }
    else if(roll>3 && roll<=6)
    {
         return paper;
    }
    else
    {
          return scissors;
    }
}

function gameLogic(){
    if (playerHand == rock && aiHand == scissors)
        resultOutput.textContent = "Congrats Rocks Beat scissors";
    else if  (playerHand == rock && aiHand == paper)
        resultOutput.textContent = "Paper beats rock you suck!";
    else if  (playerHand == scissors && aiHand == paper)
        resultOutput.textContent = "Congrats scissors Beat paper";
        else if  (playerHand == scissors && aiHand == rock)
        resultOutput.textContent = "Rock beats scissors you suck!";
        else if  ( playerHand == paper && aiHand == rock)
        resultOutput.textContent = "Congrats paper beats rock!";
        else if  (playerHand == paper && aiHand == scissors)
        resultOutput.textContent = "scissors beats paper you suck!";
    else
        resultOutput.textContent = "It's a draw! Go again!";
        aiHand = gameRoll();
}
=======
const rock='Rock';
const paper='Paper';
const scissors='scissors'; 
const aiHand =gameRoll();
let playerHand=Chooser();
function gameRoll()
{
let ai = Math.floor(Math.random() * 9) + 1;
const roll = ai;
if(roll<=3)
{
 return rock;
}
else if(roll>3 && roll<=6)
{
     return paper;
}
else
{
      return scissors;
}
}

function Chooser(){
    let hand = prompt("Please pick rock,paper,or,scissors");
    if(hand =='rock')
    {
        return rock;
    }
    else if (hand =='paper')
    {
        return paper;
    }
    else if (hand =='scissors')
    {
        return scissors;
    }
    else
    {
        console.log('try again.');
    }

    }

function gameLogic(){
    if (playerHand == rock && aiHand == scissors)
        console.log('Congrats Rocks Beat scissors');
    else if  (playerHand == rock && aiHand == paper)
        console.log('Paper beats rock you suck!');
    else if  (playerHand == scissors && aiHand == paper)
        console.log('Congrats scissors Beat paper');
        else if  (playerHand == scissors && aiHand == rock)
        console.log(' Rock beats scissors you suck!');
        else if  (playerHand == paper && aiHand == rock)
        console.log('Paper beats rock!');
        else if  (playerHand == paper && aiHand == scissors)
        console.log('scissors beats paper you suck!');
}

gameLogic(); 
>>>>>>> f306755246e5188b0e2256894060efc28acaab72
