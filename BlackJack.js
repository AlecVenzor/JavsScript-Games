const deckOfCards = deck();
var playerHand = [],
	dealerHand = [],
	playerHandValue = 0,
	dealerHandValue = 0;

function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
	var cards = [];

	for(var s = 0; s < this.suits.length; s++){
		for(var n = 0; n < this.names.length; n++){
			if(n > 9)
			{
				cards.push(new card(10, this.names[n], this.suits[s]));
			}else{
				cards.push( new card(n+1, this.names[n], this.suits[s]));
			}
		}
	}

	return cards;
}

function shuffle(deck){
	//Uses Fisher-Yates shuffle method
	let m = deck.length, i;

	while(m){
		i = Math.floor(Math.random() * m--);

		[deck[m], deck[i]] = [deck[i], deck[m]];
	}

	return deck;
}

function playerMoves(playerCards, dealerCards){

	playerHandValue = calculateHandValue(playerCards);

	while(playerHandValue < 22)
	{
		console.log(playerHandValue);

		if(playerCards.find(findAce)){
			let aceChoice = prompt("You drew an Ace, do you want to use it as a 1 or 11?");
			if(aceChoice ==="1"){
                     break;   
                }
                else if(aceChoice === "11")
                {
                    playerHandValue += 10;
                }            
		}

		var userInput = prompt("Would you like to hit(h) or stand(s)?");
		{
			if(userInput === "h"){
				var nextCard = deckOfCards.pop();
				playerCards.push(nextCard);
				playerHandValue += nextCard.value;
				if(nextCard.value === 1)
                {
                    let aceChoice = prompt("you drew an Ace, do you want to use it as a 1 or 11?");
                    if(aceChoice ==="1")
                    {
                        break;
                    }
                    else if(aceChoice === "11")
                    {
                        playerHand += 10;
                    }            
                }
				if(playerHandValue > 21)
				{
					console.log("You bust, dealer wins!");
					break;
				}
			}else if(userInput === "s")
			{
				dealerMoves(dealerCards, playerHandValue);
				break;
			}
		}
	}
}

function dealerMoves(dealerCards, playersValue){

	dealerHandValue = calculateHandValue(dealerCards);

	while(dealerHandValue < 17){
		var nextCard = deckOfCards.pop();
		dealerCards.push(nextCard);
		dealerHandValue += nextCard.value;

		if(dealerHandValue > 21){
			console.log("Dealer busts");
			dealerHandValue = 0;
			break;
		}
	}

	if(playerHandValue > dealerHandValue){
		console.log("You've won!");
		}else{
		console.log("Dealer wins, better luck next time!");
		}
}

function findAce(card){
	return card.value === 1;
}

function calculateHandValue(cards, person){

	let pValue = 0;
	let dValue = 0;

	if(person === "player"){
		cards.forEach(function(card){
			pValue += card.value;
		});
		return pValue;
	}else{
		cards.forEach(function(card){
			dValue += card.value;
		});
		return dValue;
	}
}

function playGame(){

	shuffle(deckOfCards);
	playerHand.push(deckOfCards.pop());
	playerHand.push(deckOfCards.pop());
	dealerHand.push(deckOfCards.pop());
	dealerHand.push(deckOfCards.pop());

	var firstCard = document.querySelector("#firstCard");
	var secondCard = document.querySelector("#secondCard");

	firstCard.textContent = (playerHand[0].name + " of " + playerHand[0].suit);
	secondCard.textContent = (playerHand[1].name + " of " + playerHand[1].suit);
}

playGame();

playerMoves(playerHand, dealerHand);
