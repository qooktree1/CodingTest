const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const totalAmount = Number(input.shift());

let total = 0;
for (let i = 0; i < 9; i++) {
  total += Number(input[i]);
}
console.log(totalAmount - total);
