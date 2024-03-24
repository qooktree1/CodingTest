const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const sObj = {};
let answer = 0;

for (let i = 0; i < N; i++) sObj[input[i]] = true;
for (let i = N; i < N + M; i++) if (sObj[input[i]]) answer++;
console.log(answer);