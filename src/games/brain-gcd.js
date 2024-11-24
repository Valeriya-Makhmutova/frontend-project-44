import { launchTheGame } from '../index.js';
import giveMeGcD from '../utils/for-brain-gcd.js';
import giveRandomNumber from '../utils/give-random-number.js';

const task = 'Find the greatest common divisor of given numbers.';
const UPPER_LIMIT_NUMBER = 50;

const playInBrainGcd = () => {
  const giveQuestionAndAnswer = () => {
    const randomNumber1 = giveRandomNumber(UPPER_LIMIT_NUMBER);
    const randomNumber2 = giveRandomNumber(UPPER_LIMIT_NUMBER);

    const question = `${randomNumber1} ${randomNumber2}`;
    const rightAnswer = giveMeGcD(randomNumber1, randomNumber2);

    return [question, rightAnswer];
  };
  launchTheGame([task, giveQuestionAndAnswer]);
};

export default playInBrainGcd;
