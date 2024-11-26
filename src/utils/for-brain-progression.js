const giveProgression = (length, firstNumber, difference) => {
  const resultArray = [];
  resultArray.push(firstNumber);

  let currentNumber = firstNumber;
  for (let i = 1; i < length; i += 1) {
    currentNumber += difference;
    resultArray.push(currentNumber);
  }
  return resultArray;
};

export default giveProgression;
