let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const [...numbers] = input[i].replace("\r", "").split(" ").map(Number);
  if (numbers[0] === 0 && numbers[1] === 0 && numbers[2] === 0) break;

  if (numbers[2] >= numbers[1] + numbers[0]) console.log("Invalid");
  else if (
    numbers[0] === numbers[1] &&
    numbers[1] === numbers[2] &&
    numbers[2] === numbers[0]
  )
    console.log("Equilateral");
  else if (
    numbers[0] !== numbers[1] &&
    numbers[1] !== numbers[2] &&
    numbers[2] !== numbers[0]
  )
    console.log("Scalene");
  else console.log("Isosceles ");
}
