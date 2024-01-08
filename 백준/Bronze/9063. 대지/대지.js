let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const xArr = [];
const yArr = [];
for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
}
xArr.sort((a, b) => a - b);
yArr.sort((a, b) => a - b);

console.log(
  (xArr[xArr.length - 1] - xArr[0]) * (yArr[yArr.length - 1] - yArr[0])
);
