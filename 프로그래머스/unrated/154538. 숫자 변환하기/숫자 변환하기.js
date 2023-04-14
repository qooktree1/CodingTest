// 문제: 숫자 변환하기
// 시간: 45분
// 알고리즘: DP(Dynamic Programming)

const solution = (x, y, n) => {
    const dp = new Array(y+1).fill(1000001)
    dp[x] = 0
    
    for (let i=x; i<=y; i++){
        dp[i+n] = Math.min(dp[i+n], dp[i]+1)
        dp[i*2] = Math.min(dp[i*2], dp[i]+1)
        dp[i*3] = Math.min(dp[i*3], dp[i]+1)
    }
    return dp[y] !== 1000001 ? dp[y] : -1
}


// bfs 시간 초과 - shift 는 O(n)의 시간 복잡도를 가짐
/*
const solution = (x, y, n) => {
    const visited = new Array(y+1).fill(-2)
    visited[x] = 0
    let q = [x]
    
    while (q.length > 0){
        x = q.shift()
        
        if (x === y) return visited[y]
        
        for (const nx of [x+n, x*2, x*3]){
           if (n <= y && visited[nx] === -2){
               q.push(nx)
               visited[nx] = visited[x] + 1
            }
        }
    }
    return -1
}
*/