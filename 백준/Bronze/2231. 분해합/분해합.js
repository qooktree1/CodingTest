const N = Number(require("fs").readFileSync("/dev/stdin").toString());

const solution = () => {
  for (let i = 0; i < N; i++) {
    let numStr = String(i);
    let total = i;

    for (let j = 0; j < numStr.length; j++) total += Number(numStr[j]);
    if (N === total) return i;
  }
  return 0;
};

console.log(solution());
