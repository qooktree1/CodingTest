const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input.shift());
const numbers = [];
for (let i = 0; i < N; i++) {
  numbers.push(Number(input[i]));
}

numbers.sort((a, b) => a - b);
const answer = [];

for (let i = 0; i < numbers.length; i++) {
  answer.push(numbers[i] * N);
  N--;
}
console.log(Math.max(...answer));
