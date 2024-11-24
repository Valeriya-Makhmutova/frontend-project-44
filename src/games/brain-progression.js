import { launchTheGame } from '../index.js';
import giveProgression from '../utils/for-brain-progression.js';
import giveRandomNumber from '../utils/give-random-number.js';

const MIN_LENGTH = 5;
const MAX_LENGHT = 10;
const RANGE_FOR_FIRST_PROGRESSION_NUM = 9;
const RANGE_FOR_DIFFERENCE = 15;

const task = 'What number is missing in the progression?';

const signForMissingPlace = '..';

const playInBrainProgression = () => {
  const giveQuestionAndAnswer = () => {
    // функция giveProgression возвращает прогрессию заданной длины -
    // рандомная длина в диапазоне чисел, нужно ещё указать
    // диапазон для первого члена прогрессии (от 1 до *число*),
    // диапазон для разницы между числами (от 1 до *число*)
    const progression = giveProgression(
      MIN_LENGTH,
      MAX_LENGHT,
      RANGE_FOR_FIRST_PROGRESSION_NUM,
      RANGE_FOR_DIFFERENCE,
    );
    const randomIndexPlase = giveRandomNumber(progression.length - 1);
    const rigthAnswer = progression[randomIndexPlase];
    progression[randomIndexPlase] = signForMissingPlace;

    const question = `${progression.join(' ')}`;
    return [question, rigthAnswer];
  };
  launchTheGame([task, giveQuestionAndAnswer]);
};

export default playInBrainProgression;
