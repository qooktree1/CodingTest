let N = Number(require("fs").readFileSync("/dev/stdin").toString());

const ans = [];

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N /= i;
    ans.push(i);
  }
}

console.log(ans.join("\n"));
