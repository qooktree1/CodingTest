let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

if (input[0] < input[1] + input[2]) console.log(input[0] + input[1] + input[2]);
else {
  input[0] = input[1] + input[2] - 1;
  console.log(input[0] + input[1] + input[2]);
}
