const countBingos = (board, shape) => {
    let cnt = 0
    
    for (let i=0; i<3; i++){
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === shape) cnt++  // 가로
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] === shape) cnt++  // 세로
    }
    
    // 대각선
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === shape) cnt++
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] === shape) cnt++
    
    return cnt
}


const countShapes = (arr, shape) => {
    let cnt = 0
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[0].length; j++){
            if (arr[i][j] === shape) cnt++
        }
    }
    return cnt
}

const solution = board => {
    const circle = countShapes(board, "O")
    const cross = countShapes(board, "X")
    const circleBingo = countBingos(board, "O")
    const crossBingo = countBingos(board, "X")
    
    // 정상적이지 않은 경우들
    
    // O, X 개수가 올바르지 않을 경우
    if (circle < cross || circle >= cross + 2) return 0
    
    // 둘 다 승리하는 경우
    if (circleBingo && crossBingo) return 0
    
    // O가 승리했는데 O와 X 가 같은 수를 둔 경우
    if (circleBingo && circle === cross) return 0
    
    // X가 승리했는데 O가 X보다 많은 수를 둔 경우
    if (crossBingo && circle > cross) return 0
    
    
    return 1
}