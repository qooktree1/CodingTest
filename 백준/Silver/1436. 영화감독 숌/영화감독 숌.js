const fs = require("fs")
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n")

let N = Number(inputData[0])

let cnt = 0
let num = 666
while (cnt <= N) {
    const strFindDevil = String(num)
    if (strFindDevil.includes("666")) {
        cnt++
        if (cnt === N) {
            console.log(strFindDevil)
            break
        }
    }
    num++
}
