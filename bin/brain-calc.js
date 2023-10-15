#!/usr/bin/env node

import game from '../src/games/game-calc.js';
import rules from '../src/index.js';
import { getUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

const gameRules = rules();
gameRules.setUserName(userName);
gameRules.reset();
game(gameRules).start();
