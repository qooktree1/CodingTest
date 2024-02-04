const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  const strArr = input[i].trim().split(" ");
  const answer = strArr.map((str) => str.split("").reverse().join(""));
  console.log(answer.join(" "));
}
