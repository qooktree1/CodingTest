const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const officePerson = new Map();

for (let i = 0; i < +n; i++) {
  const [name, state] = input[i].trim().split(" ");
  if (state === "enter") officePerson.set(name, name);
  else if (state === "leave") officePerson.delete(name);
}

console.log(
  Array.from(officePerson, (item) => item[0])
    .sort()
    .reverse()
    .join("\n")
);
