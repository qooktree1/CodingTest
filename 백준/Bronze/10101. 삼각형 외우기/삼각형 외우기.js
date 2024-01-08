let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

if (a === b && b === c && c === 60) console.log("Equilateral");
else if (a + b + c !== 180) console.log("Error");
else if (a !== b && b !== c && c !== a && a + b + c === 180)
  console.log("Scalene");
else console.log("Isosceles");
