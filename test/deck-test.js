const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');

describe('deck', function() {
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(() => {
        card1 = createCard(1, 'Which is not a dog breed?', ['poodle', 'dalmation', 'tabby'], 'tabby');
        card2 = createCard(2, 'Where was I born?', ['Denver', 'Spokane', 'Portland'], 'Spokane');
        card3 = createCard(3, 'How many siblings do I have?', ['one', 'two', 'three'], 'three')
        deck = createDeck([card1, card2, card3])
    })

    it('should be an array of objects', function() {
        expect(Array.isArray(deck)).to.equal(true)
        expect(typeof deck[0]).to.equal('object')
    })
   
    
    it('should count number of cards in a deck', function() {
        let cardNumber = countCards(deck)
        expect(cardNumber).to.equal(3)
    })
})
