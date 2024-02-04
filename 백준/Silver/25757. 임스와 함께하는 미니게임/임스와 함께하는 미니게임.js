const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, k] = input.shift().replace("\r", "").split(" ");

const people = new Set();
for (let i = 0; i < Number(n); i++) {
  people.add(input[i].replace("\r", ""));
}

if (k === "Y") {
  console.log(people.size);
} else if (k === "F") {
  console.log(Math.floor(people.size / 2));
} else {
  console.log(Math.floor(people.size / 3));
}
