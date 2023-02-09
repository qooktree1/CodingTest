// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")

// Test
// let input = require("fs").readFileSync("example.txt").toString().split("\n")

const [M, N] = input.shift().trim().split(" ").map(Number)
const board = Array.from(Array(M), () => Array(M).fill(1))
const grows = Array(2*M-1).fill(0)

for (let i=0; i<N; i++){
    const [zero, one, two] = input.shift().trim().split(" ").map(Number)
    for (let i=zero; i<zero+one; i++) grows[i] += 1
    for (let i=zero+one; i<zero+one+two; i++) grows[i] += 2
}

const growOne = () => {
    for (let i=M-1; i>-1; i--) board[i][0] += grows[M-1-i]
    for (let i=1; i<M; i++) board[0][i] += grows[M-1+i]
}
const growTwo = () => {
    for (let i=1; i<M; i++){
        for (let j=1; j<M; j++){
            board[i][j] = board[i-1][j]
        }
    }
}

growOne()
growTwo()
board.forEach(l => console.log(...l))