const fs = require("fs");
const [T, ...inputData] = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < T; i++) {
  const N = Number(inputData[i]);

  const zeroDP = [1, 0];
  const oneDP = [0, 1];
  for (let i = 2; i <= N; i++) {
    zeroDP.push(zeroDP[i - 2] + zeroDP[i - 1]);
    oneDP.push(oneDP[i - 2] + oneDP[i - 1]);
  }
  console.log(zeroDP[N], oneDP[N]);
}

/*
0 -> 1 0
1 -> 0 1
2 -> 1 1
3 -> 1 2
*/
