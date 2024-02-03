const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let total = 0;
let minOddNumber = 101;
for (let i = 0; i < input.length; i++) {
  const num = Number(input[i]);

  if (num % 2) {
    total += num;
    minOddNumber = Math.min(minOddNumber, num);
  }
}
if (total === 0) console.log(-1);
else console.log(total + "\n" + minOddNumber);