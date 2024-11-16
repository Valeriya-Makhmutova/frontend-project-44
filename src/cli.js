import readlineSync from 'readline-sync';

export const askUserName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('My name is: ');
  return name;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const askAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkUserAnswer = (userAnswer, correctAnswer, userName) => {
  let result;
  if (userAnswer == correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    result = false;
  }
  return result;
}

export const isUserWin = (i, userName) => {
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}