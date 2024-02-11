const inputLines = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const T = Number(inputLines.shift());

for (let t = 0; t < T; t++) {
  const N = Number(inputLines.shift());
  const clothDict = {};

  for (let i = 0; i < N; i++) {
    const [, classification] = inputLines.shift().trim().split(" ");
    clothDict[classification] = (clothDict[classification] || 0) + 1;
  }

  let answer = 1;
  for (const key of Object.keys(clothDict)) {
    answer *= clothDict[key] + 1;
  }
  console.log(answer - 1);
}
