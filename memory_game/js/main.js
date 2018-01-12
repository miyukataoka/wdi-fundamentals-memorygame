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

// Create array to store cards in play;
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
var flipCard = function () {
// Get data-id attribute of the card that was flipped and store it in variable
cardId = this.getAttribute('data-id');
console.log(cardId);

// Add card to array of cards that are in play
cardsInPlay.push(cards[cardId].card);

// Show card image
this.setAttribute('src', cards[cardId].cardImage);

// Check if two cards have been played
if (cardsInPlay.length === 2) {
  checkForMatch();
// Empty cards for next attempt
cardsInPlay = [];
  }
};

// Function to create new game board
var createBoard = function () {
  // Cards array to add each card for board
  for (var i = 0; i < cards.length; i++) {
    // Create img element and store it
    var cardElement = document.createElement('img');

    // Set src attribute for the back of the card
    cardElement.setAttribute('src', 'images/back.png');

    // Set 'data-id' attribute to the current element
    cardElement.setAttribute('data-id', i);

    // Add event listener so when card is clicked, flipCard will happen
    cardElement.addEventListener('click', flipCard);

    // Add card to the board
    document.getElementById('game-board').appendChild(cardElement);
  }
}

// Function to create board
createBoard();
