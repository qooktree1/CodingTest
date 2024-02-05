let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const BRACKET_MAP = ["[", "]", "{", "}", "(", ")"];

const BRACKET_OBJ = { "[": "]", "{": "}", "(": ")" };

for (let i = 0; i < input.length; i++) {
  const str = input[i];
  const stack = [];
  if (str === ".") break;

  for (let j = 0; j < str.length; j++) {
    if (BRACKET_MAP.includes(str[j])) {
      stack.push(str[j]);
    }

    if (stack.length >= 2) {
      const [a, b] = [stack[stack.length - 1], stack[stack.length - 2]];
      if (a === "]" && b === "[") {
        stack.pop();
        stack.pop();
      } else if (a === "}" && b === "{") {
        stack.pop();
        stack.pop();
      } else if (a === ")" && b === "(") {
        stack.pop();
        stack.pop();
      }
    }
  }

  console.log(stack.length > 0 ? "no" : "yes");
}
