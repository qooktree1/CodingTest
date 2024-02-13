const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let answer = [];
for (let i = N; i <= M; i++) {
  const rootN = Math.floor(i ** (1 / 2));
  if (rootN ** 2 === i) answer.push(i);
}

if (answer.length > 0) {
  console.log(answer.reduce((a, b) => a + b, 0) + "\n" + answer[0]);
} else {
  console.log(-1);
}
