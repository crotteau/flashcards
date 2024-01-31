function createCard(id, question, answers, correctAnswer) {
    const card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
    return card
}

function evaluateGuess(guess, correctAnswer) {
    if (guess === correctAnswer) {
        console.log('Correct!')
        return 'Correct!'
    } else console.log('Incorrect!')
    return 'Incorrect!'
}

module.exports = {
    createCard,
    evaluateGuess
}