const dx = [1, 1, 1, 0, 0, -1, -1, -1]
const dy = [0, 1, -1, 1, -1, -1, 0, 1]
function solution(board) {
    let ni = 0
    let nj = 0
    for (let i=0; i<board.length; i++){
        for (let j=0; j<board[0].length; j++){
            
            if (board[i][j] === 1){
                for (let d=0; d<8; d++){
                ni = i + dx[d]
                nj = j + dy[d]
                if (0 <= ni && ni < board.length && 0 <= nj && nj < board[0].length && board[ni][nj] === 0) board[ni][nj] = 2
                }
            }
        }
    }
    let answer = 0
    for (let i=0; i<board.length; i++){
        for (let j=0; j<board[0].length; j++){
            if (board[i][j] === 0) answer += 1
        }
    }
    return answer
}