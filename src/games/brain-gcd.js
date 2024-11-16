import {
  greeting, askUserName, askAnswer, checkUserAnswer, isUserWin,
} from '../cli.js';
import giveMeGcD from '../utils/for-brain-gcd.js';

const playInBrainGcd = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50) + 1;
    const randomNumber2 = Math.floor(Math.random() * 50) + 1;

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = askAnswer();
    const rightAnswer = giveMeGcD(randomNumber1, randomNumber2);

    const flag = checkUserAnswer(answer, rightAnswer, userName);
    if (flag === false) {
      break;
    }
    isUserWin(i, userName);
  }
};

export default playInBrainGcd;
