console.log("Up and running!");

//Use console.log() to show two cards that are flipped
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

// Create array to store all of the cards
var cards = ["queen", "queen", "king", "king"];

// Create array to store the cards in play;
var cardsInPlay = []

//Create a variable cardOne to represent first card that is flipped
var cardOne = cards[0];

// Add card to array of cards that are in play
cardsInPlay.push(cardOne);

// Use console.log() to display the card that is flipped
console.log("User flipped" + cardOne);

// Create variable cardTwo for second card that is flipped
var cardTwo = cards[2];

// Add card to array of cards that are in play
cardsInPlay.push(cardTwo);

//Use console.log() to shoow card that is flipped
console.log("User flipped " + cardTwo);

// Check to see if two cards have been played
if (cardsInPlay.length === 2) {
  if (cardsInPlay [0] === cardsInPlay [1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
