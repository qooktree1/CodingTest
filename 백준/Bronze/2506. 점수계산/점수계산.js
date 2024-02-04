const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input.shift());
const numbers = input[0].split(" ").map(Number);
let total = numbers[0];
let cnt = 1;
for (let i = 1; i < N; i++) {
  if (numbers[i - 1] === 1 && numbers[i] === 1) {
    cnt++;
    total += cnt;
  } else if (numbers[i - 1] !== 1 && numbers[i] === 1) {
    cnt = 1;
    total += cnt;
  }
}

console.log(total);
