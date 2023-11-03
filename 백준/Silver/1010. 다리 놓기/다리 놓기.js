const fs = require("fs")
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n")
const T = inputData.shift()

const factorial = (n) => {
    let result = 1
    for (let i = 2; i <= n; i++) result *= i
    return result
}

for (let i = 0; i < T; i++) {
    const [N, M] = inputData[i].split(" ").map(Number)
    console.log(Math.round(factorial(M) / (factorial(N) * factorial(M - N))))
}
