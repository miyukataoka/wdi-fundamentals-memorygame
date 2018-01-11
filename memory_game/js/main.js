// Create array to store all of the cards
var cards = ["queen", "queen", "king", "king"];

// Create array to store the cards in play;
var cardsInPlay = []

// Create function to check if there is a match
var checkForMatch = function () {
// Check to see if two cards match and give response
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

// Create a functon to represent user flipping card
var flipCard = function (cardId) {
// Show card that user just flipped
  console.log("User flipped " + cards[cardId]);

// Add card to array of cards that are in play
cardsInPlay.push(cards[cardId]);

// Check if two cards have been played
if (cardsInPlay.length === 2) {
  checkForMatch();
}
};
// Calls flipCard after it has been defined
flipCard(0);
flipCard(2);
