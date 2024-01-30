const chai = require('chai');
const expect = chai.expect;

const { } = require('../src/deck');
const { prototypeData } = require('../src/data');

describe('deck', function() {
    it.skip('should be an array of objects', function() {
        expect(prototypeData.typeOf).to.equal('array')
    })

    it.skip('should know number of cards in the decks array')
})