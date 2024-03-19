const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

console.log(input.sort((a, b) => a - b).join("\n"));
