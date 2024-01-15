const N = Number(require("fs").readFileSync("/dev/stdin").toString());

const factorial = (n) => {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(N));
