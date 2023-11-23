const { body } = require('express-validator')

/**
 * @argument {Array} questions
 * @argument {Number} count
 * @description generate n=count random questions from questions array
 * @returns {Array} randomQuestions
 * */
function getRandomQuestions(questions, count) {
    questions = [...questions]
    let randomQuestions = [];
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        randomQuestions.push(questions[randomIndex]);
        questions.splice(randomIndex, 1);
    }
    return randomQuestions;
}

const validator = [
    body('marks').isNumeric().withMessage('Marks must be a number'),
    body('difficulty.easy').isNumeric().withMessage('Easy must be a number'),
    body('difficulty.medium').isNumeric().withMessage('Medium must be a number'),
    body('difficulty.hard').isNumeric().withMessage('Hard must be a number'),
]


module.exports = { getRandomQuestions, validator };