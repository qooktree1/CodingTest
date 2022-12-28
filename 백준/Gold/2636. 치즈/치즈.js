let input = require("fs").readFileSync("/dev/stdin").toString().split("\n")
const [N, M] = input[0].split(" ").map(Number)

// 2차원 배열 입력
const board = []
let tempBoard
for (let i=1; i <= N; ++i){
    tempBoard = input[i].split(" ").map(Number)
    board.push(tempBoard)
}

let answerTime = 0  // 없어지는데 걸리는 시간
const cheeseArray = []  // 마지막 치즈 조각 개수 배열

// 벡터 이동
const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]

const bfs = () => {
    const visited = Array.from(Array(N), () => Array(M).fill(0))
    const q = [[0, 0]]
    visited[0][0] = 1
    let cheeseCnt = 0

    while (q.length > 0){
        const [x, y] = q.shift()
        for (let d=0; d < 4; ++d){
            const nx = x + dx[d]
            const ny = y + dy[d]

            if (0 <= nx && nx < N && 0 <= ny && ny < M && !visited[nx][ny]){
                visited[nx][ny] = 1

                // 전 칸이 빈칸이고 현재 칸이 치즈일때
                if (board[x][y] == 0 && board[nx][ny] == 1){
                    board[nx][ny] = 0
                    cheeseCnt++  // 치즈 칸 count
                } else q.push([nx, ny])  // 치즈 바깥 범위가 아닐경우 다음 위치
            }
        }

        
    }
    return cheeseCnt
    
}

while (true){
    const cheese = bfs()
    if (cheese === 0){
        break
    } else {
        cheeseArray.push(cheese)
        answerTime += 1
    }
}

console.log(answerTime)
console.log(cheeseArray[cheeseArray.length - 1])