let [a, b, c, d, e, f] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const solution = () => {
  for (let x = -999; x < 1000; x++) {
    for (let y = -999; y < 1000; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        return [x, y];
      }
    }
  }
};

console.log(solution().join(" "));
