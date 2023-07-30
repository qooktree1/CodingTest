const findStart = board => {
    for (let i=0; i<board.length; i++){
        for (let j=0; j<board[0].length; j++){
            if (board[i][j] === "R") return [i, j]
        }
    }
}

const bfs = (sx, sy, board, visit) => {
    const dx = [0, 0, -1, 1]
    const dy = [1, -1, 0, 0]
    visit[sx][sy] = 1
    const q = []
    q.push([sx, sy])
    while (q.length > 0){
        const [x, y] = q.shift()
        for (let d=0; d<4; d++){
            let [nx, ny] = [x, y]
            
            while (0 <= nx && nx < board.length && 0 <= ny && ny < board[0].length && board[nx][ny] !== "D"){
                nx += dx[d]
                ny += dy[d]
            }
            nx -= dx[d]
            ny -= dy[d]
            
            if (visit[nx][ny] === 0){
                visit[nx][ny] = visit[x][y] + 1
                q.push([nx, ny])
            }
            if (board[nx][ny] === "G") return visit[nx][ny] - 1
        }
    }
    return -1
}


const solution = board => {
   const [sx, sy] = findStart(board)
   const visited = Array.from(Array(board.length), () => Array(board[0].length).fill(0))
   
   const ans = bfs(sx, sy, board, visited)
   return ans
}