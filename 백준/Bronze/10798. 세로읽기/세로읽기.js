let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const maxLength = Math.max(...input.map((x) => x.length));
let ans = "";

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    ans += input[j][i] ?? "";
  }
}

console.log(ans);
