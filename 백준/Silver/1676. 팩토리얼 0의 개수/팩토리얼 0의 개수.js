let N = Number(require("fs").readFileSync("/dev/stdin"));

let answer = 0;

/** 5의 배수로 0 추가 */
while (N >= 5) {
  answer += Math.floor(N / 5);
  N /= 5;
}

console.log(answer);
