import readlineSync from 'readline-sync';

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
