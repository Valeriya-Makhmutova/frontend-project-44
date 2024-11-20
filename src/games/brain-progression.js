import { launchTheGame } from '../index.js';
import giveProgression from '../utils/for-brain-progression.js';

const playInBrainProgression = () => {
  const task = 'What number is missing in the progression?';
  const dataForTask = [];

  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = giveProgression();
    const [answer, arrayProgression] = questionAndAnswer;
    const question = `${arrayProgression.join(' ')}`;
    const rightAnswer = answer;
    dataForTask.push([question, rightAnswer]);
  }
  launchTheGame([task, dataForTask]);
};

export default playInBrainProgression;
