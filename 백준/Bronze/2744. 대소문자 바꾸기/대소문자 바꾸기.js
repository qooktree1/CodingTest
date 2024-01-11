const input = require("fs").readFileSync("/dev/stdin").toString();

let str = "";

const isUpperCase = (c) => c === c.toUpperCase();

for (let i = 0; i < input.length; i++) {
  if (isUpperCase(input[i])) str += input[i].toLowerCase();
  else str += input[i].toUpperCase();
}

console.log(str);
