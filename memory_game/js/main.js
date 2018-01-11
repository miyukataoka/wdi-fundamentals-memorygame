// Create array to store all of the cards
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// Create array to store the cards in play;
var cardsInPlay = [];

// Create function to check if there is a match
var checkForMatch = function () {
// Check to see if two cards match and give response
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

// Create functon to represent flipping card
var flipCard = function (cardId) {
// Show card that user just flipped
  console.log("User flipped " + cards[cardId].card);

// Add card to array of cards that are in play
cardsInPlay.push(cards[cardId].card);

// Image path in console
console.log(cards[cardId].suit)

// Check if two cards have been played
if (cardsInPlay.length === 2) {
  checkForMatch();
// Empty cards array for next attempt
cardsInPlay = [];
  }
};

// Calls flipCard after it has been defined
flipCard(0);
flipCard(2);
