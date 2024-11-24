import { sayHi, askAnswer } from './cli.js';

export const checkUserAnswer = (userAnswer, correctAnswer) => (
  String(userAnswer) === String(correctAnswer)
);

export const launchTheGame = (dataFromGame) => {
  // данные игры
  // [задание, функцияИгры]
  const [task, giveQuestionAndAnswer] = dataFromGame;

  const userName = sayHi();
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = giveQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = askAnswer();

    if (checkUserAnswer(userAnswer, rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
