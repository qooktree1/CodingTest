let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const number = Number(input[i]);
  if (number === 0) break;

  const str = String(number);
  const reversedStr = str.slice().split("").reverse().join("");
  console.log(str === reversedStr ? "yes" : "no");
}
