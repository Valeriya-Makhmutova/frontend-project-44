import { sayHi, askAnswer } from './cli.js';

export const checkUserAnswer = (userAnswer, correctAnswer) => {
  let result;
  if (String(userAnswer) === String(correctAnswer)) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export const launchTheGame = (dataFromGame) => {
  // данные игры
  // [задание, [вопрос, ответ]]
  const task = dataFromGame[0];
  const questionAndAnswer = dataFromGame[1];

  const userName = sayHi();
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const data = questionAndAnswer[i];
    const question = data[0];
    const rightAnswer = data[1];

    console.log(`Question: ${question}`);
    const userAnswer = askAnswer();

    if (checkUserAnswer(userAnswer, rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
