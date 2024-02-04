const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, ...arr] = input.slice();
const array = arr.map((x) => x.trim().split(" ").map(Number));

let answer = 0;
const dp = Array.from(Array(Number(N)), () => Array(3).fill(0));
dp[0][0] = array[0][0];
dp[0][1] = array[0][1];
dp[0][2] = array[0][2];

for (let i = 1; i < Number(N); i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + array[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + array[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + array[i][2];
}

console.log(Math.min(...dp[dp.length - 1]));
