const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let train = 0;
let maxPeople = 0;
for (let i = 0; i < 4; i++) {
  const [off, on] = input[i].split(" ").map(Number);
  tmp = train - off + on;
  maxPeople = Math.max(maxPeople, tmp);
  train = tmp;
}

console.log(maxPeople);
