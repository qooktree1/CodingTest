// n=2 -> 3
// n=4 -> 11
// n=6 -> 41
// 짝수만 cnt
const solution = n => {
    const dp = [3, 11]
    for (let i=2; i<n; i++){
        let tmp = dp[i-1] * 3 + 2
        for (let j=0; j<i-1; j++){
            tmp += dp[j] * 2
        }
        dp.push(tmp % 1000000007)
    }
    return dp[n/2 - 1]
}