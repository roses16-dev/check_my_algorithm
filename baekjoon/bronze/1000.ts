// 2023.07.06
// A+B

import { readFileSync } from 'fs';

const inputs: string[] = readFileSync('/dev/stdin').toString().trim().split(' ');
const a: number = parseInt(inputs[0]);
const b: number = parseInt(inputs[1]);

console.log(a + b);