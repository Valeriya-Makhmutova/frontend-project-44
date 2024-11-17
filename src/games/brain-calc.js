import {
  sayHi, launchTheGame,
} from '../cli.js';

const playCalc = () => {
  const userName = sayHi();

  console.log('What is the result of the expression?');

  launchTheGame(['brainCalc', userName]);
};

export default playCalc;
