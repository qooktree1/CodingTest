let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
const dragonCurve = []
for (let i=0; i < Number(input[0]); i++){
    dragonCurve.push(input[i+1].replace("\r","").split(" ").map(Number))
}


const board = Array.from(Array(101), () => Array(101).fill(0))
// 우, 상, 좌, 하
const dx = [1, 0, -1, 0]
const dy = [0, -1, 0, 1]



dragonCurve.forEach(tmp => {
    let [x, y, d, g] = tmp
    board[x][y] = 1
    const movesList = dragonMoves(d, g)
    for (const dir of movesList){
        x += dx[dir]
        y += dy[dir]
        board[x][y] = 1
    }
})

function dragonMoves(d, g){
    let moves = [d]
    for (let i = 1; i <= g; i++) {
        let temp = []
        for (let i = moves.length - 1; i > -1; i--) {
          const previous = moves[i]
          const after = (previous + 1) % 4
          temp.push(after)
        }
        moves.push(...temp)
      }
      return moves
}

let answer = 0
for (let i=0; i < 100; i++){
    for (let j=0; j < 100; j++){
        if (board[i][j] && board[i][j+1] && board[i+1][j] && board[i+1][j+1]){
            answer += 1
        }
    }
}
console.log(answer)