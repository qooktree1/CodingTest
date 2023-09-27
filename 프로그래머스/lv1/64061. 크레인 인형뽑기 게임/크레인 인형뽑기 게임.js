const solution = (board, moves) => {
    const stack = []
    let ans = 0
    const [N, M] = [board.length, board[0].length]
    
    moves.forEach(move => {
        move--
        
        for (let i=0; i<N; i++){
            if (board[i][move] !== 0){
                stack.push(board[i][move])
                board[i][move] = 0
                break
            }
        }
        while (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]){
            stack.pop()
            stack.pop()
            ans += 2
        }
    })
    return ans
    
}