const solution = (n, words) => {
  const wordsObj = {};
  wordsObj[words[0]] = 1;

  for (let i = 1; i < words.length; i++) {
    if (
      wordsObj[words[i]] ||
      words[i - 1][words[i - 1].length - 1] !== words[i][0]
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    wordsObj[words[i]] = 1;
  }
  return [0, 0];
};
