const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < 3; i++) {
  const ssum = input[i]
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (ssum === 3) console.log("A");
  else if (ssum === 2) console.log("B");
  else if (ssum === 1) console.log("C");
  else if (ssum === 0) console.log("D");
  else if (ssum === 4) console.log("E");
}
