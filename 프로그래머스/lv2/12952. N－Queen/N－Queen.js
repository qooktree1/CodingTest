const dfs = (queen, n, row) => {
    let cnt = 0
    if (n === row) return 1  // 끝까지 도달하면 +1
    
    for (let col=0; col<n; col++){
        queen[row] = col
        
        let flag = true
        for (let x=0; x<row; x++){
            
            // 세로 겹치는 경우
            if (queen[x] === queen[row]){
                flag = false
                break
            }
            
            // 대각선 겹치는 경우
            if (Math.abs(queen[x]-queen[row]) === row-x){
                flag = false
                break
            }
        }
        if (flag) cnt += dfs(queen, n, row+1)  // 다음 퀸 배치
    }
    return cnt
}


const solution = n => {
    const queen = Array(n).fill(0)
    return dfs(queen, n, 0)
}