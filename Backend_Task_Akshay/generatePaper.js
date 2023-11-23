const { getRandomQuestions } = require('./util');
let { difficultyMarks, easy, hard, medium } = require('./data/store');
const { validationResult } = require('express-validator');

/**
 * @description generates a paper based on the marks and difficulty assuming that all questions of same difficulty have same marks
 * @body {
 *      marks : Number,
 *      difficulty: {
 *          easy: Number,
 *          medium: Number,
 *          hard: Number
 *      }
 * }  
 */
async function generatePaper(req, res) {
    try {

        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(400).json(errors);
        }
        let { marks, difficulty } = req.body;

        if (difficulty.easy + difficulty.medium + difficulty.hard !== 100) throw new Error('Invalid difficulty distribution');

        let easyMarks = Math.floor((marks * difficulty?.easy) / 100);
        let mediumMarks = Math.floor((marks * difficulty?.medium) / 100);
        let hardMarks = Math.floor((marks * difficulty?.hard) / 100);


        if (easyMarks % difficultyMarks.easy !== 0 ||
            mediumMarks % difficultyMarks.medium !== 0 ||
            hardMarks % difficultyMarks.hard !== 0) {
            throw new Error('Not possible with given difficulty distribution & marks');
        }

        let easyCn = easyMarks / difficultyMarks.easy;
        let mediumCn = mediumMarks / difficultyMarks.medium;
        let hardCn = hardMarks / difficultyMarks.hard;

        let paper = {
            marks: marks,
            distribution: difficulty,
            questions: []
        }

        paper.questions.push(...getRandomQuestions(easy, easyCn));
        paper.questions.push(...getRandomQuestions(medium, mediumCn));
        paper.questions.push(...getRandomQuestions(hard, hardCn));

        res.status(200).json({ paper });
    } catch (error) {
        console.log(error)
        res.status(400).json({ err: error.message });
    }
}


module.exports = generatePaper