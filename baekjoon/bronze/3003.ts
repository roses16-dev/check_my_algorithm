import { readFileSync } from 'fs';

const inputs: number[] = readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const collectNumbers: number[] = [1, 1, 2, 2, 2, 8];
let answer: number[];

answer = inputs.map((e, i) => collectNumbers[i] - e);

console.log(answer.join(' '));
