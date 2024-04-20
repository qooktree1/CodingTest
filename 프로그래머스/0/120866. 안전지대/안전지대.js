const dx = [1, 1, 1, 0, 0, -1, -1, -1]
const dy = [0, 1, -1, 1, -1, -1, 0, 1]

const isInArea = (n, x, y) => 0 <= x && x < n && 0 <= y && y < n

const solution = board => {
    const n = board.length
    let answer = 0
    let ni, nj
    
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if (board[i][j] === 1){
                for (let d=0; d<8; d++){
                ni = i + dx[d]
                nj = j + dy[d]
                if (isInArea(n, ni, nj) && board[ni][nj] === 0) board[ni][nj] = 2
                }
            }
        }
    }
    
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if (board[i][j] === 0) answer++
        }
    }
    return answer
}