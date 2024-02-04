const [H, W, N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

console.log(Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1)));
