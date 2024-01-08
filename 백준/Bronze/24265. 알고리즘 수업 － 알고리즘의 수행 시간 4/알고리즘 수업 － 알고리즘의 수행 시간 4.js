let n = Number(require("fs").readFileSync("/dev/stdin").toString());

let ans = 0;
for (let i = 1; i < n; i++) ans += i;
console.log(ans);
console.log(2);
