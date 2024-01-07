const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
for (let i = 0; i < input.length; i++) {
  if (Number(input[i]) === -1) break;
  let num = Number(input[i]);
  let totalArr = [];
  let total = 0;
  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      totalArr.push(j);
      total += j;
    }
  }

  if (num === total) console.log(`${num} = ${totalArr.join(" + ")}`);
  else console.log(`${num} is NOT perfect.`);
}
