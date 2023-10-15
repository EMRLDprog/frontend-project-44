import readlineSync from 'readline-sync';

export const getAnswerForQuestion = (question) => readlineSync.question(`${question} `);
export const getUserName = () => getAnswerForQuestion('May I have your name?');
