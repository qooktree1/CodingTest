let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N] = input.shift().split(" ").map(Number);

const A = new Set();
const answer = [];

for (let i = 0; i < N; i++) {
  const inputStr = input[i].replace("\r", "");
  A.add(inputStr);
}

for (let i = N; i < input.length; i++) {
  const inputStr = input[i].replace("\r", "");
  if (A.has(inputStr)) answer.push(inputStr);
}

answer.sort((a, b) => a.localeCompare(b));

console.log(answer.length + "\n" + answer.join("\n"));
