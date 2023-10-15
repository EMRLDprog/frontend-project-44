import { getAnswerForQuestion } from '../cli.js';
import getRandomNumber from '../utils/randomNumber.js';

const operations = ['+', '-', '*'];

const getOperation = () => operations[getRandomNumber(2)];

const next = (rules) => {
  const num1 = getRandomNumber(99);
  const num2 = getRandomNumber(99);
  const operation = getOperation();
  const expression = `${num1} ${operation} ${num2}`;
  // eslint-disable-next-line no-eval
  const rightAnswer = eval(expression);
  console.log(`Question: ${expression}`);

  rules.check({ rightAnswer, answer: getAnswerForQuestion('Your answer:') }, () => next(rules));
};

export default (rules) => ({
  start() {
    console.log('What is the result of the expression?');
    next(rules);
  },
});
