const fs = require("fs");
let [N, ...inputData] = fs.readFileSync("/dev/stdin").toString().split("\n");
N = Number(N);

const dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const [t, p] = inputData[i].split(" ").map(Number);
  if (i + t > N) continue; // 상담 불가 확인
  dp[i] += p;

  for (let j = i + t; j < N; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}
console.log(Math.max(...dp));
