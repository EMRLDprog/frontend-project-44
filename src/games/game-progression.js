import { getAnswerForQuestion } from '../cli.js';
import getRandomNumber from '../utils/randomNumber.js';

const createPrg = (first, base, count) => Array.from({ length: count }, (_, i) => first + base * i);
const hidePrgElement = (progression, index) => progression.map((el, i) => (i === index ? '..' : el));

export default (rules) => {
  const next = () => {
    const first = getRandomNumber(19);
    const base = getRandomNumber(5) + 1;
    const count = getRandomNumber(5) + 5;

    const progression = createPrg(first, base, count);
    const answerIndex = getRandomNumber(count - 1);
    const answerToCheck = `${progression[answerIndex]}`;
    const question = hidePrgElement(progression, answerIndex).join(' ');

    console.log(`Question: ${question}`);
    const userAnswer = getAnswerForQuestion('Your answer:');

    rules.check({ rightAnswer: answerToCheck, answer: userAnswer }, next);
  };

  return {
    start: () => {
      console.log('What number is missing in the progression?');
      next();
    },
  };
};
