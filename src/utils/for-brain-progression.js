import giveRandomNumber from './give-random-number.js';

const giveProgression = (minLength, maxLength, rangeForFirstNumber, difference) => {
  const resultArray = [];

  const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const randomDifference = giveRandomNumber(difference);
  const randomFirstNumber = giveRandomNumber(rangeForFirstNumber);

  let currentNumber = 0;

  for (let i = 0; i < randomLength; i += 1) {
    if (i === 0) {
      currentNumber += randomFirstNumber;
      resultArray.push(randomFirstNumber);
    } else {
      currentNumber += randomDifference;
      resultArray.push(currentNumber);
    }
  }

  return resultArray;
};

export default giveProgression;
