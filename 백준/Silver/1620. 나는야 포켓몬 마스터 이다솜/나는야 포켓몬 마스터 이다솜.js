const [NM, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);

const POKEMON_DICT = {};

for (let i = 0; i < N; i++) {
  POKEMON_DICT[input[i].trim()] = i + 1;
  POKEMON_DICT[i + 1] = input[i].trim();
}

const answer = [];
for (let i = N; i < N + M; i++) {
  answer.push(POKEMON_DICT[input[i].trim()]);
}
console.log(answer.join("\n"));
