let [N, arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
N = Number(N);
const array = arr.split(" ").map(Number);
const visited = new Array(N).fill(false);
let answer = 0;
const newArr = [];

const calculate = (calcArr) => {
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    sum += Math.abs(calcArr[i] - calcArr[i + 1]);
  }
  return sum;
};

const dfs = (n) => {
  for (let i = 0; i < N; i++) {
    if (n === N) {
      answer = Math.max(answer, calculate(newArr));
      return;
    }

    if (!visited[i]) {
      visited[i] = true;
      newArr.push(array[i]);
      dfs(n + 1);
      newArr.pop();
      visited[i] = false;
    }
  }
};

dfs(0);

console.log(answer);
