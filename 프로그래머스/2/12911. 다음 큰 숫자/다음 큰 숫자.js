const countOnes = (num) => [...num.toString(2)].filter((c) => c === "1").length;

const solution = (n) => {
  const oneCnt = countOnes(n);
  for (let i = n + 1; i <= 1000000; i++) {
    if (oneCnt === countOnes(i)) return i;
  }
};