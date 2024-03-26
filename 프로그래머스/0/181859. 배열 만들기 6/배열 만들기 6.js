const solution = (arr) => {
  const stk = [];
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    if (stk[stk.length - 1] === arr[i]) stk.pop();
    else stk.push(arr[i]);
  }
  return stk.length > 0 ? stk : [-1];
};
