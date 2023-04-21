function solution(a, d, included) {
    let ans = 0
    for (const flag of included){
        if (flag) ans += a
        a += d
    }
    return ans
}