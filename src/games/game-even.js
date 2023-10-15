import { getAnswerForQuestion } from '../cli.js';
import getRandomNumber from '../utils/randomNumber.js';

const Answer = {
  YES: 'yes',
  NO: 'no',
};

export default (rules) => ({
  start: function next() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const num = getRandomNumber(99);
    const rightAnswer = num % 2 === 0 ? Answer.YES : Answer.NO;
    console.log(`Question: ${num}`);
    rules.check({ rightAnswer, answer: getAnswerForQuestion('Your answer:') }, next);
  },
});
