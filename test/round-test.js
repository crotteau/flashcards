const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')

describe('round', function() {
    // beforeEach(function() {
    //     const card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
    //     const card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
    //     const card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
    
    //     const deck = createDeck([card1, card2, card3])
    //     const round = createRound(deck)
    //     });

    it('should create a round', function() {
        const card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        const card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        const card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
    
        const deck = createDeck([card1, card2, card3])
        const round = createRound(deck)

            expect(round.deck.length).to.equal(3)
            expect(round.currentCard).to.equal(card1)
            expect(round.turns).to.equal(0)
            expect(round.incorrectGuesses.length).to.equal(0)
        })
        
    it('should update turns count', function() {
        const card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        const card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        const card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
    
        const deck = createDeck([card1, card2, card3])
        const round = createRound(deck)
        const update = takeTurn('poodle', round)

        expect(update.turns).to.equal(1)
    })
        
    it('should evaluate the guess', function() {
        const card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        const card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        const card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
    
        const deck = createDeck([card1, card2, card3])
        const round = createRound(deck)
        const update = takeTurn('poodle', round)

           expect(update.result).to.equal('Incorrect!')
           expect(update.incorrectGuesses.length).to.equal(1)
           expect(update.incorrectGuesses[0]).to.equal(1)
           const round2 = createRound(deck)
           const update2 = takeTurn('tabby', round2)


           expect(update2.result).to.equal('Correct!')
           expect(update2.incorrectGuesses.length).to.equal(0)
        })

    it('should update current card', function() {
        const card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        const card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        const card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
    
        const deck = createDeck([card1, card2, card3])
        const round = createRound(deck)
        const update = takeTurn('poodle', round)

        expect(update.currentCard).to.equal(card2)

        const round2 = createRound(deck)
        const update2 = takeTurn('tabby', round2)

        expect(update2.currentCard).to.equal(card2)
    })

    it('should calculate percent of correct guesses', function() {
        const card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        const card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        const card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
    
        const deck = createDeck([card1, card2, card3])
        const round = createRound(deck)
        const update = takeTurn('poodle', round)
        const updateAgain = takeTurn('Spokane', update)
        const updateAgain2 = takeTurn('three', updateAgain)

        expect(calculatePercentCorrect(updateAgain2)).to.equal(67)

        const round2 = createRound(deck)
        const update2 = takeTurn('tabby', round2)

        expect(calculatePercentCorrect(update2)).to.equal(100)

    })

    it('should print round is over to console', function() {
        const card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        const card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        const card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
    
        const deck = createDeck([card1, card2, card3])
        const round = createRound(deck)
        const update = takeTurn('poodle', round)
        const updateAgain = takeTurn('Spokane', update)
        const updateAgain2 = takeTurn('three', updateAgain)

        expect(endRound(updateAgain2)).to.equal('** Round over! ** You answered 67% of the questions correctly!')
    })
    })
