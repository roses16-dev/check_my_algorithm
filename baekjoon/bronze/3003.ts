// 2023.07.06
// 킹, 퀸, 룩, 비숍, 나이트, 폰

import { readFileSync } from 'fs';

const inputs: number[] = readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const collectNumbers: number[] = [1, 1, 2, 2, 2, 8];
let answer: number[];

answer = inputs.map((e, i) => collectNumbers[i] - e);

console.log(answer.join(' '));
