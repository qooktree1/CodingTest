const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let winner = 0;
let winnerScore = 0;
for (let i = 0; i < 5; i++) {
  const ssum = input[i]
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  if (winnerScore < ssum) {
    winnerScore = ssum;
    winner = i + 1;
  }
}
console.log(winner, winnerScore);
