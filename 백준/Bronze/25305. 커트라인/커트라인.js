const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [, k] = input.shift().split(" ").map(Number);
const grades = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
console.log(grades[k - 1]);
