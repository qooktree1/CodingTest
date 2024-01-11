const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
const N = input.shift();

const stack = [];
for (let i = 0; i < N; i++) {
  if (input[i] === 0) stack.pop();
  else stack.push(input[i]);
}

console.log(stack.reduce((a, b) => a + b, 0));
