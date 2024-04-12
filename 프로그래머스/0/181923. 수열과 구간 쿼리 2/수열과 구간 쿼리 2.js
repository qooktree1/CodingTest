const solution = (arr, queries) =>
  queries.map((query) => {
    const [s, e, k] = query;
    let minNum = 1000001;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k) minNum = Math.min(minNum, arr[i]);
    }
    return minNum === 1000001 ? -1 : minNum;
  });