import { launchTheGame } from '../index.js';

const playInBrainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const dataForTask = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const question = `${randomNumber}`;
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    dataForTask.push([question, rightAnswer]);
  }

  launchTheGame([task, dataForTask]);
};

export default playInBrainEven;
