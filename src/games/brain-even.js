import { launchTheGame } from '../index.js';
import giveRandomNumber from '../utils/give-random-number.js';

const isEven = (number) => (number % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const UPPER_LIMIT_NUMBER = 50;

const playInBrainEven = () => {
  const giveQuestionAndAnswer = () => {
    const randomNumber = giveRandomNumber(UPPER_LIMIT_NUMBER);
    const question = `${randomNumber}`;
    const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  launchTheGame([task, giveQuestionAndAnswer]);
};

export default playInBrainEven;
