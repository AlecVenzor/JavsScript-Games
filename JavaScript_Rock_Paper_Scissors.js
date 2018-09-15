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
