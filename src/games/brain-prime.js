import {
  sayHi, launchTheGame,
} from '../cli.js';

const playBrainPrime = () => {
  const userName = sayHi();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  launchTheGame(['brainPrime', userName]);
};

export default playBrainPrime;
