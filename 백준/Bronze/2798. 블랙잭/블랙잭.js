const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      if (numbers[i] + numbers[j] + numbers[k] <= M) {
        answer = Math.max(answer, numbers[i] + numbers[j] + numbers[k]);
      }
    }
  }
}

console.log(answer);
