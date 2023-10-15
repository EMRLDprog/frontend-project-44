import { getAnswerForQuestion } from '../cli.js';
import getGCD from '../utils/gcd.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  const next = () => {
    const [num1, num2] = [getRandomNumber(9), getRandomNumber(9)];
    console.log(`Question: ${num1} ${num2}`);

    rules.check({ rightAnswer: getGCD(num1, num2), answer: getAnswerForQuestion('Your answer:') }, next);
  };

  return {
    start: () => {
      console.log('Find the greatest common divisor of given numbers.');
      next();
    },
  };
};
