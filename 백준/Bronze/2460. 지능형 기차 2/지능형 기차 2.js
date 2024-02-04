const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let train = 0;
let maxPerson = 0;
let tmp;

for (let i = 0; i < 10; i++) {
  const [off, on] = input[i].split(" ").map(Number);
  tmp = train + on - off;
  maxPerson = Math.max(maxPerson, tmp);
  train = tmp;
}

console.log(maxPerson);
