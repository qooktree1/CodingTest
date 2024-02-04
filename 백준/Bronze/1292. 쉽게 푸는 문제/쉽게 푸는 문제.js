const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const numbers = [];
for (let i = 1; i < 46; i++) {
  for (let j = 1; j <= i; j++) {
    numbers.push(i);
  }
}

console.log(numbers.slice(A - 1, B).reduce((a, b) => a + b, 0));