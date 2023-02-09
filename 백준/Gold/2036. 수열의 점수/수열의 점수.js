const fs = require("fs")
let [n, ...numbers] = fs.readFileSync("dev/stdin").toString().trim().split("\n").map(Number)

const positiveNumbers = []
const negativeNumbers = []
let answer = 0n

for (let i=0; i<n; i++){
    if (numbers[i] > 1) positiveNumbers.push(numbers[i])
    else if (numbers[i] <= 0) negativeNumbers.push(numbers[i])
    else answer += 1n  // 1은 어떤 수와 곱하면 손해 따라서 따로 빼준다
}

positiveNumbers.sort((a, b) => b-a)
negativeNumbers.sort((a, b) => a-b)

function checkNumbers(numbers, ssum){
    if (numbers.length % 2 === 0) for (let i=0; i<numbers.length; i+=2) ssum += BigInt(numbers[i]*numbers[i+1])
    else {
        for (let i=0; i<numbers.length-1; i+=2) ssum += BigInt(numbers[i]*numbers[i+1])
        ssum += BigInt(numbers[numbers.length-1])
    }
    return ssum
}
answer += checkNumbers(positiveNumbers, 0n)
answer += checkNumbers(negativeNumbers, 0n)
console.log(answer.toString())