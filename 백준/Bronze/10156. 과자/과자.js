const [K, N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

console.log(Math.max(0, K * N - M));
