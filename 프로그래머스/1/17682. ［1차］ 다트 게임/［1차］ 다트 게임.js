const solution = (dartResult) => {
  let stack = [];
  let tmp = "";
  dartResult.split("").forEach((dart) => {
    if (!isNaN(dart)) tmp += dart;
    else {
      switch (dart) {
        case "S":
          stack.push(+tmp);
          tmp = "";
          break;
        case "D":
          stack.push((+tmp) ** 2);
          tmp = "";
          break;
        case "T":
          stack.push((+tmp) ** 3);
          tmp = "";
          break;
        case "*":
          stack[stack.length - 2] = stack[stack.length - 2] * 2;
          stack[stack.length - 1] = stack[stack.length - 1] * 2;
          break;
        case "#":
          stack[stack.length - 1] = stack[stack.length - 1] * -1;
          break;
      }
    }
  });
  return stack.reduce((a, b) => a + b, 0);
};