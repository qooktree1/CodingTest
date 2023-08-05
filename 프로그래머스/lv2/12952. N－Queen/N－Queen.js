const solution = n => {
    let ans = 0
    let queen = Array(n).fill(0)
    
    const dfs = row => {
        if (n === row) ans++
        
        for (let col=0; col<n; col++){
            queen[row] = col
            let checker = true
            for (let i=0; i<row; i++){
                if (queen[row] === queen[i]){
                    checker = false
                    break
                }
                if (Math.abs(queen[row] - queen[i]) === Math.abs(i-row)){
                    checker = false
                    break
                }
            }
            if (checker) dfs(row+1)
        }
    }
    
    for (let i=0; i<n; i++){
        queen[0] = i
        dfs(1)
    }
    
    
    return ans
}