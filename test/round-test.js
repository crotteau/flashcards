const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')

describe('round', function() {
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(function() {
        card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
        deck = createDeck([card1, card2, card3])
    })

    it('should create an object for the round data', function() {
        const round = createRound(deck)

        expect(round.deck.length).to.equal(3)
        expect(round.currentCard).to.equal(card1)
        expect(round.turns).to.equal(0)
        expect(round.incorrectGuesses.length).to.equal(0)
    })   
    
    it('should evaluate when a guess is incorrect', function() { 
        const round = createRound(deck)
        
        expect(takeTurn('poodle', round)).to.equal('Incorrect!')
        expect(round.incorrectGuesses.length).to.equal(1)
        expect(round.incorrectGuesses[0]).to.equal(1)
    })
    
    it('should evaluate when a guess is correct', function() {
        const newRound = createRound(deck)
         
        expect(takeTurn('tabby', newRound)).to.equal('Correct!')
        expect(newRound.incorrectGuesses.length).to.equal(0)
    })

    it('should update turns count when a guess is made', function() {
        const round = createRound(deck)
        const turn = takeTurn('poodle', round)

        expect(round.turns).to.equal(1)
    })

    it('should update current card', function() {
        const round = createRound(deck)
        const turn = takeTurn('poodle', round)

        expect(round.currentCard).to.equal(card2)

        const newRound = createRound(deck)
        const newTurn = takeTurn('tabby', newRound)

        expect(newRound.currentCard).to.equal(card2)
    })

    it('should calculate percent of correct guesses', function() {
        let round = createRound(deck)
        const turn = takeTurn('poodle', round)
        const anotherTurn = takeTurn('Spokane', round)
        const anotherTurn2 = takeTurn('three', round)

        expect(calculatePercentCorrect(round)).to.equal(67)

        const newRound = createRound(deck)
        const newTurn = takeTurn('tabby', newRound)

        expect(calculatePercentCorrect(newRound)).to.equal(100)

    })

    it('should print round is over to console', function() {
        const round = createRound(deck)
        const turn = takeTurn('poodle', round)
        const anotherTurn = takeTurn('Spokane', round)
        const anotherTurn2 = takeTurn('three', round)

        expect(endRound(round)).to.equal('** Round over! ** You answered 67% of the questions correctly!')
    })
    })
