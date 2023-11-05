const fs = require("fs")
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n")
const T = Number(inputData.shift())

for (let i = 0; i < T; i++) {
    const str = inputData.shift()
    const tmpStr = str.split("")
    console.log(tmpStr[0] + tmpStr[tmpStr.length - 1])
}
