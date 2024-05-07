const solution = (number, limit, power) => {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j <= i ** 0.5; j++) {
      if (i % j === 0) {
        if (j !== i / j) cnt++; // 제곱근으로 중복되는 값을 여기서 처리
        cnt++;
      }
      if (cnt > limit) {
        cnt = power;
        break;
      }
    }
    answer += cnt;
  }
  return answer;
};