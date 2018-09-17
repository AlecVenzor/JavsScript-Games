const deckOfCards = deck();
var playerHand = [];
var dealerHand = [];
var playerHandValue = 0;
var dealerHandValue = 0;

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
			if(n > 10)
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

	let bust = 22;
	playerHandValue = calculateHandValue(playerCards, "player");
	dealerHandValue = calculateHandValue(dealerCards, "dealer");

	while(playerHandValue < bust)
	{
		console.log(playerHandValue);

		var userInput = prompt("Would you like to hit(h), stick(s) or fold(f)?")
		{
			if(userInput === "h")
			{
				var nextCard = deckOfCards.pop();
				playerHand.push(nextCard);
				playerHandValue += nextCard.value;
			}else if(userInput === "s")
			{
				if(playerHandValue > dealerHandValue)
				{
					console.log("You've won!");
				}else{
					console.log("Dealer wins, better luck next time!");
				}
				break;
			}
		}
	}
}

function calculateHandValue(cards, person){

	if(person === "player")
	{
		cards.forEach(function(card){
			playerHandValue += card.value;
		});
	}else{
		cards.forEach(function(card){
			dealerHandValue += card.value;
		})
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
