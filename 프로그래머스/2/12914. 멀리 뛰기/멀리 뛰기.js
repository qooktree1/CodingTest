// 신나는 DP...
// 1칸 움직일 수 있는 방법의 개수는? -> 1
// 2칸 움직일 수 있는 방법의 개수는? -> 2
// 3칸 움직일 수 있는 방법의 개수는? -> 3
// 4칸 움직일 수 있는 방법의 개수는? -> 5

// Tabulation 적용
const solution = n => {
    if (n <= 3) return n
    const dp = [1, 2, 3]
    
    for (let i=3; i<=n; i++){
        dp.push((dp[i-1] + dp[i-2]) % 1234567)
    }
    return dp[n-1]
}