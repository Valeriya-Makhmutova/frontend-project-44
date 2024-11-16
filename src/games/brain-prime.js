import {
  greeting, askUserName, askAnswer, checkUserAnswer, isUserWin,
} from '../cli.js';
import isItPrime from '../utils/for-brain-prime.js';

const playBrainPrime = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    const isPrime = isItPrime(randomNumber) === true ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const answer = askAnswer();

    const flag = checkUserAnswer(answer, isPrime, userName);
    if (flag === false) {
      break;
    }
    isUserWin(i, userName);
  }
};

export default playBrainPrime;
