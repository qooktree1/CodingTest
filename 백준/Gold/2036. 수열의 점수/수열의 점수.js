const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = 0n;

const plus = [];
const minus = [];

for (let i = 0; i < n; i++) {
  if (numbers[i] > 1) {
    plus.push(numbers[i]);
  } else if (numbers[i] <= 0) {
    minus.push(numbers[i]);
  } else {
    answer += 1n;
  }
}

plus.sort((a, b) => b - a);
minus.sort((a,b) => a - b);

if (plus.length % 2 === 0) {
  for (let i = 0; i < plus.length; i += 2) {
    answer += BigInt(plus[i] * plus[i + 1]);
  }
} else {
  for (let i = 0; i < plus.length - 1; i += 2) {
    answer += BigInt(plus[i] * plus[i + 1]);
  }
  answer += BigInt(plus[plus.length - 1]);
}

if (minus.length % 2 === 0) {
  for (let i = 0; i < minus.length; i += 2) {
    answer += BigInt(minus[i] * minus[i + 1]);
  }
} else {
  for (let i = 0; i < minus.length - 1; i += 2) {
    answer += BigInt(minus[i] * minus[i + 1]);
  }
  answer += BigInt(minus[minus.length - 1]);
}

console.log(answer.toString());