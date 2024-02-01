const { evaluateGuess } = require('./card')

function createRound(deck) {
    let round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
    }; return round
}

function takeTurn(guess, round) {
    round.turns += 1
    let result = evaluateGuess(guess, round.currentCard.correctAnswer)
        if (result === 'Incorrect!') {
            round.incorrectGuesses.push(round.currentCard.id)
            round.currentCard = round.deck[round.turns]
            return result
        } else
            round.currentCard = round.deck[round.turns]
            return result
}

function calculatePercentCorrect(round) {
    let percent = 100
    if (round.incorrectGuesses.length > 0) {
     percent = Math.round((1 - (round.incorrectGuesses.length / round.turns)) * 100)
    return percent
    } else return percent
}

function endRound(round) {
    if (round.turns === round.deck.length) {
        percent = calculatePercentCorrect(round)
        console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`)
        return 'Round is Over'
    }
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}