function solution(start, end) {
    let ans = []
    for (let i=start; i>end-1; i--) ans.push(i)
    return ans
}