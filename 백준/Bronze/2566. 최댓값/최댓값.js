let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

let maxNum = 0,
  x = 0,
  y = 0;

for (let i = 0; i < input.length; i++) {
  const tmpInput = input[i].split(" ").map(Number);
  for (let j = 0; j < tmpInput.length; j++) {
    if (tmpInput[j] >= maxNum) {
      maxNum = tmpInput[j];
      x = i;
      y = j;
    }
  }
}

console.log(maxNum);
console.log(x + 1, y + 1);
