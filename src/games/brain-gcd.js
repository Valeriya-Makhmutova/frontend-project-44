import { launchTheGame } from '../index.js';
import giveMeGcD from '../utils/for-brain-gcd.js';

const playInBrainGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const dataForTask = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50) + 1;
    const randomNumber2 = Math.floor(Math.random() * 50) + 1;

    const question = `${randomNumber1} ${randomNumber2}`;
    const rightAnswer = giveMeGcD(randomNumber1, randomNumber2);

    dataForTask.push([question, rightAnswer]);
  }
  launchTheGame([task, dataForTask]);
};

export default playInBrainGcd;
