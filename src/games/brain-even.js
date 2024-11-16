import {
  greeting, askUserName, askAnswer, checkUserAnswer, isUserWin,
} from '../cli.js';

const playInBrainEven = () => {
  greeting();
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const answer = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = askAnswer();

    const flag = checkUserAnswer(userAnswer, answer, userName);
    if (flag === false) {
      break;
    }
    isUserWin(i, userName);
  }
};

export default playInBrainEven;
