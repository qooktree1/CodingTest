let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arrayX = [];
const arrayY = [];
let x;
let y;

for (let i = 0; i < 3; i++) {
  arrayX.push(Number(input[i].split(" ")[0]));
  arrayY.push(Number(input[i].split(" ")[1]));
}
arrayX.sort();
arrayY.sort();

x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

console.log(x, y);
