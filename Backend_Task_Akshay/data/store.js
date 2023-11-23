const questions = require("./questionStore.json");

const easy = questions.filter(question => question.difficulty === 'Easy');
const medium = questions.filter(question => question.difficulty === 'Medium');
const hard = questions.filter(question => question.difficulty === 'Hard');

let Store = {
    easy,
    medium,
    hard,
    all: questions,
    // difficlty wise marks
    difficultyMarks: {
        easy: 2,
        medium: 5,
        hard: 10
    }
}

module.exports = Store