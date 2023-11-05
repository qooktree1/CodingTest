const fs = require("fs")
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n")
const S = inputData[0]
const i = inputData[1]
console.log(S.split("")[i - 1])
