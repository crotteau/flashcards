const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createDeck, countCards } = require('./deck')
const { createRound, endRound } = require('./round')

function start() {
  let deck = createDeck(prototypeQuestions)
  let round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
  endRound(round)
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion, start };
