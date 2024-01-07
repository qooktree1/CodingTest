let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [N, M] = input.shift().split(" ").map(Number);
const arr = Array.from(new Array(N), () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  const tmpInput = input[i].split(" ").map(Number);
  for (let j = 0; j < tmpInput.length; j++) {
    arr[i][j] += tmpInput[j];
  }
}
for (let i = N; i < N + N; i++) {
  const tmpInput = input[i].split(" ").map(Number);
  for (let j = 0; j < tmpInput.length; j++) {
    arr[i - N][j] += tmpInput[j];
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(" "));
}
