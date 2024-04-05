const solution = (n) => {
  let [s, e, numberSum, answer] = [1, 1, 1, 0];

  while (s <= e && e <= n) {
    if (e === n && numberSum < n) return answer;

    if (numberSum < n) numberSum += ++e;
    else if (numberSum >= n) {
      if (numberSum === n) answer++;
      numberSum -= s++;
    }
  }
  return answer;
};