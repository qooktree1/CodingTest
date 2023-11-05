const fs = require("fs")

const inputData = fs.readFileSync("/dev/stdin").toString().split("\n")
const s = inputData[0]
let tmpS = s
console.log(tmpS.split("").reverse().join("") === s ? 1 : 0)
