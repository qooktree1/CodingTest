const fs = require("fs")

const inputData = fs.readFileSync("/dev/stdin").toString().split("\n")
const numbers = inputData[0].split(" ").map(Number)

console.log(
    1 - numbers[0],
    1 - numbers[1],
    2 - numbers[2],
    2 - numbers[3],
    2 - numbers[4],
    8 - numbers[5]
)
