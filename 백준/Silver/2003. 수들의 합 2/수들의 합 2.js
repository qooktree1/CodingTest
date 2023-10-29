const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = inputData.shift().split(" ").map(Number);
const numbers = inputData[0].split(" ").map(Number);

let [s, e] = [0, 0];
let answer = 0;

let total = s;

while (s <= e && e <= numbers.length) {
  if (M === total) {
    answer++;
    total += numbers[e++];
    total -= numbers[s++];
  } else if (M < total) {
    total -= numbers[s++];
  } else if (M > total) {
    total += numbers[e++];
  }
}
console.log(answer);
