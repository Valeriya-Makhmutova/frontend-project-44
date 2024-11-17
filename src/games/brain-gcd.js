import {
  sayHi, launchTheGame,
} from '../cli.js';

const playInBrainGcd = () => {
  const userName = sayHi();

  console.log('Find the greatest common divisor of given numbers.');

  launchTheGame(['brainGcd', userName]);
};

export default playInBrainGcd;
