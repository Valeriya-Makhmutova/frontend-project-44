import {
  sayHi, launchTheGame,
} from '../cli.js';

const playInBrainProgression = () => {
  const userName = sayHi();

  console.log('What number is missing in the progression?');

  launchTheGame(['brainProgression', userName]);
};

export default playInBrainProgression;
