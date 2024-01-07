let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const costArr = [25, 10, 5, 1];

for (let i = 1; i < input.length; i++) {
  const answer = [0, 0, 0, 0];
  let totalCost = Number(input[i]);

  for (let j = 0; j < 4; j++) {
    answer[j] += Math.floor(totalCost / costArr[j]);
    totalCost %= costArr[j];
  }
  console.log(answer.join(" "));
}
