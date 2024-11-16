import {
  greeting, askUserName, askAnswer, checkUserAnswer, isUserWin,
} from '../cli.js';
import giveProgression from '../utils/for-brain-progression.js';

const playInBrainProgression = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = giveProgression();

    console.log(`Question: ${(questionAndAnswer[1]).join(' ')}`);
    const answer = askAnswer();
    const rightAnswer = questionAndAnswer[0];

    const flag = checkUserAnswer(answer, rightAnswer, userName);
    if (flag === false) {
      break;
    }
    isUserWin(i, userName);
  }
};

export default playInBrainProgression;
