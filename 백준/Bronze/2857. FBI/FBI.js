const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const answer = [];
for (let i = 0; i < 5; i++) {
  if (input[i].includes("FBI")) answer.push(i + 1);
}

console.log(answer.length > 0 ? answer.join(" ") : "HE GOT AWAY!");
