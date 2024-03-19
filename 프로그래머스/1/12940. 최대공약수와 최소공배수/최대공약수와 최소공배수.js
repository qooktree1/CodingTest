const solution = (n, m) => {
  let lcm,
    gcd = 1;
  for (let i = 1; i <= n * m; i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
    if (!lcm && i % n === 0 && i % m === 0) lcm = i;
  }
  return [gcd, lcm];
};
