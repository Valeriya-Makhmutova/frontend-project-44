import {
  sayHi, launchTheGame,
} from '../cli.js';

const playInBrainEven = () => {
  const userName = sayHi();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  launchTheGame(['brainEven', userName]);
};

export default playInBrainEven;
