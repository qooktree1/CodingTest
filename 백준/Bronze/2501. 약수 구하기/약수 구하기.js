const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const ans = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) ans.push(i);
}

if (ans.length < K) console.log(0);
else console.log(ans[K - 1]);
