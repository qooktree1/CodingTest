let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
const M = input[0]
const cups = [1, 2, 3]
let numbers = []
for (let i=1; i <= M; ++i){
    numbers = input[i].split(" ").map(Number)  // 숫자로 매핑
    let a = cups.indexOf(numbers[0])
    let b = cups.indexOf(numbers[1])
    let temp = cups[a]
    cups[a] = cups[b]
    cups[b] = temp
}
console.log(cups[0])