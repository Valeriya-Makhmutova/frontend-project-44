import { launchTheGame } from '../index.js';
import isItPrime from '../utils/for-brain-prime.js';
import giveRandomNumber from '../utils/give-random-number.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const UPPER_LIMIT_NUMBER = 50;

const playBrainPrime = () => {
  const giveQuestionAndAnswer = () => {
    const randomNumber1 = giveRandomNumber(UPPER_LIMIT_NUMBER);
    const question = `${randomNumber1}`;
    const rightAnswer = isItPrime(randomNumber1) === true ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  launchTheGame([task, giveQuestionAndAnswer]);
};

export default playBrainPrime;
