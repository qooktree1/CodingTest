const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((a, _, i) => a + A[i] * B[i], 0);
};
