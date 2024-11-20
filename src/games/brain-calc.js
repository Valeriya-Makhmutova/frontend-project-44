import { launchTheGame } from '../index.js';

const playCalc = () => {
  const task = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const dataForTask = [];
  let rightAnswer;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50) + 1;
    const randomNumber2 = Math.floor(Math.random() * 10);
    const randomIndex = Math.floor(Math.random() * operators.length);

    const question = `${randomNumber1} ${operators[randomIndex]} ${randomNumber2}`;

    if (randomIndex === 0) {
      rightAnswer = randomNumber1 + randomNumber2;
    } else if (randomIndex === 1) {
      rightAnswer = randomNumber1 - randomNumber2;
    } else if (randomIndex === 2) {
      rightAnswer = randomNumber1 * randomNumber2;
    }
    dataForTask.push([question, rightAnswer]);
  }
  launchTheGame([task, dataForTask]);
};

export default playCalc;
