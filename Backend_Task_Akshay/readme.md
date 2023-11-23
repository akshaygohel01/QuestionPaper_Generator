=>This assignment is implemented using Node.js and express.js backend technologies.

=>To run the project you need to run the following commands:
npm install 
npm run start

=> Following points gives detailed information about this project.
(1) Here I have kept 3 types of questions easy, medium and hard:
- Easy questions are of 2 marks.
- Medium questions are of 5 marks.
- Hard questions are of 10 marks.

(2) First we need to enter the marks of the paper.

(3)After entering total marks we can set difficulty level according to our requirements.
- If the difficulty is set in correct way, the question paper with desired difficulty level will be generated. (Ex: marks-100  easy-20%(20 marks), medium-30%(30 marks),hard-50%(50 marks)).
- If the difficulty is not set properly , then it will show one message invalid difficulty distribution. (Ex: marks-40  easy-21% (21% of 40 = 8.4) fraction therefore not possible.)

(4)If we enter proper marks and difficulty then questins from questionStore.json file will be selected and paper will be generated corresponding to user entered difficulty level and marks.



