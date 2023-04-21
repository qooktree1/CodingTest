function solution(n) {
    const ans = Array.from(Array(n), () => Array(n).fill(0))
    for (let i=0; i<n; i++) ans[i][i]++
    return ans
}