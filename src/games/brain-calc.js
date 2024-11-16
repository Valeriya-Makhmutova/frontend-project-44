import {
  greeting, askUserName, askAnswer, checkUserAnswer, isUserWin,
} from '../cli.js';

const playCalc = () => {
  const operators = ['+', '-', '*'];
  let answer;
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const randomIndex = Math.floor(Math.random() * operators.length);

    console.log(`Question: ${randomNumber1} ${operators[randomIndex]} ${randomNumber2}`);
    const userAnswer = askAnswer();

    if (randomIndex === 0) {
      answer = randomNumber1 + randomNumber2;
    } else if (randomIndex === 1) {
      answer = randomNumber1 - randomNumber2;
    } else if (randomIndex === 2) {
      answer = randomNumber1 * randomNumber2;
    }

    const flag = checkUserAnswer(userAnswer, answer, userName);
    if (flag === false) {
      break;
    }
    isUserWin(i, userName);
  }
};

export default playCalc;
