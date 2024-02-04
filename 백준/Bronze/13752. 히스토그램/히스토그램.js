const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = Number(input.shift());
for (let i = 0; i < testCase; i++) {
  let print = "";
  for (let j = 0; j < input[i]; j++) print += "=";
  console.log(print);
}
