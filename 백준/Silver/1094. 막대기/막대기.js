const N = Number(require("fs").readFileSync("/dev/stdin"));

console.log(
  N.toString(2)
    .split("")
    .filter((x) => x === "1").length
);
