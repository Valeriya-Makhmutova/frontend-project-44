import { launchTheGame } from '../index.js';
import giveRandomNumber from '../utils/give-random-number.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateThis = (operatorIndex, number1, number2) => {
  let rightAnswer;

  switch (operatorIndex) {
    case 0:
      rightAnswer = number1 + number2;
      break;
    case 1:
      rightAnswer = number1 - number2;
      break;
    case 2:
      rightAnswer = number1 * number2;
      break;
    default:
      rightAnswer = undefined;
  }
  return rightAnswer;
};

const playCalc = () => {
  const UPPER_LIMIT_FIRST_NUMBER = 50;
  const UPPER_LIMIT_SECOND_NUMBER = 10;

  const giveQuestionAndAnswer = () => {
    const randomNumber1 = giveRandomNumber(UPPER_LIMIT_FIRST_NUMBER);
    const randomNumber2 = giveRandomNumber(UPPER_LIMIT_SECOND_NUMBER);
    // если нам нужен индекс из массива, то всегда нужно брать его длину на 1 меньше,
    // иначе полцчим undefined
    const randomIndex = giveRandomNumber(operators.length - 1);

    const question = `${randomNumber1} ${operators[randomIndex]} ${randomNumber2}`;

    const rightAnswer = calculateThis(randomIndex, randomNumber1, randomNumber2);
    return [question, rightAnswer];
  };
  launchTheGame([task, giveQuestionAndAnswer]);
};

export default playCalc;
