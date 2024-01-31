const { evaluateGuess } = require("./card")

function createRound(deck) {
    let round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
    }
    return round
}

function takeTurn(guess, round) {
    round.turns += 1
    let result = evaluateGuess(guess, round.currentCard.correctAnswer)
    round.result = result
    if (result === 'Incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.currentCard = round.deck[round.turns]
    return round
}

function calculatePercentCorrect(round) {
    let percent = 100
    if (round.incorrectGuesses.length > 0) {
     percent = Math.round((1 - (round.incorrectGuesses.length / round.turns)) * 100)
    return percent
    } else return percent
}

function endRound(round) {
    percent = calculatePercentCorrect(round)
    if (round.turns === round.deck.length) {
        return `** Round over! ** You answered ${percent}% of the questions correctly!`
    }
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}