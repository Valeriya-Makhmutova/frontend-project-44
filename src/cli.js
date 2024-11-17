import readlineSync from 'readline-sync';
import giveMeGcD from './utils/for-brain-gcd.js';
import isItPrime from './utils/for-brain-prime.js';
import giveProgression from './utils/for-brain-progression.js';

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('My name is: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

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
  // мы должны получить данные по игре, чтобы выдать правильный результат
  // имя игрока, название игры
  // [название игры, имя игрока]
  const operatorsForBrainCalc = ['+', '-', '*'];

  let rightAnswer;
  let question;

  const gameName = dataFromGame[0];
  const userName = dataFromGame[1];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 50) + 1;

    if (gameName === 'brainCalc') {
      const randomNumber2 = Math.floor(Math.random() * 10);
      const randomIndex = Math.floor(Math.random() * operatorsForBrainCalc.length);
      question = `${randomNumber1} ${operatorsForBrainCalc[randomIndex]} ${randomNumber2}`;

      if (randomIndex === 0) {
        rightAnswer = randomNumber1 + randomNumber2;
      } else if (randomIndex === 1) {
        rightAnswer = randomNumber1 - randomNumber2;
      } else if (randomIndex === 2) {
        rightAnswer = randomNumber1 * randomNumber2;
      }
    }

    // исходя из кокнкретной игры — работа программы
    if (gameName === 'brainEven') {
      question = `${randomNumber1}`;
      rightAnswer = randomNumber1 % 2 === 0 ? 'yes' : 'no';
    }

    if (gameName === 'brainGcd') {
      const randomNumber2 = Math.floor(Math.random() * 50) + 1;
      question = `${randomNumber1} ${randomNumber2}`;
      rightAnswer = giveMeGcD(randomNumber1, randomNumber2);
    }

    if (gameName === 'brainPrime') {
      question = `${randomNumber1}`;
      rightAnswer = isItPrime(randomNumber1) === true ? 'yes' : 'no';
    }

    if (gameName === 'brainProgression') {
      const questionAndAnswer = giveProgression();
      const [answer, arrayProgression] = questionAndAnswer;
      question = `${arrayProgression.join(' ')}`;
      rightAnswer = answer;
    }

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
