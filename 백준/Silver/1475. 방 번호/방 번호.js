const inputData = require("fs").readFileSync("/dev/stdin").toString().split("\n")

numbers = inputData[0].split("").map(Number)

const numberObj = {}
for (let number of numbers) {
    if (number === 6) number = 9

    if (number in numberObj) numberObj[number] += 1
    else numberObj[number] = 1
}
if ("9" in numberObj) numberObj["9"] = Math.ceil(numberObj["9"] / 2)

const answer = Math.max(...Object.values(numberObj))
console.log(answer)
