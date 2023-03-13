let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
const N = parseInt(input[0])
if (N % 2 !== 0) console.log("SK")  // 홀수면 상근이 이김
else console.log("CY")  // 짝수면 창영이 이김