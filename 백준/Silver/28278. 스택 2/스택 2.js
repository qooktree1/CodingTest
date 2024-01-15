const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
const answer = [];
const N = Number(input.shift());
for (let i = 0; i < N; i++) {
  const line = input[i].split(" ").map(Number);

  if (line.length === 2 && line[0] === 1) stack.push(line[1]);
  else if (line[0] === 2) {
    if (stack.length > 0) answer.push(stack.pop());
    else answer.push(-1);
  } else if (line[0] === 3) answer.push(stack.length);
  else if (line[0] === 4) {
    if (stack.length > 0) answer.push(0);
    else answer.push(1);
  } else if (line[0] === 5) {
    if (stack.length > 0) answer.push(stack[stack.length - 1]);
    else answer.push(-1);
  }
}

console.log(answer.join("\n"));
