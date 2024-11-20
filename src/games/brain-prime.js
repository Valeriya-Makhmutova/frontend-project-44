import { launchTheGame } from '../index.js';
import isItPrime from '../utils/for-brain-prime.js';

const playBrainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const dataForTask = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50) + 1;
    const question = `${randomNumber1}`;
    const rightAnswer = isItPrime(randomNumber1) === true ? 'yes' : 'no';
    dataForTask.push([question, rightAnswer]);
  }
  launchTheGame([task, dataForTask]);
};

export default playBrainPrime;
