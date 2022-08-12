function solution(a, b) {
    let ans = 0
    if (a > b) {
        for (let i=b; i <= a; ++i){
            ans += i
        }
        return ans
    } else if (a < b) {
        for (let j=a; j<= b; ++j) {
            ans += j
        }
        return ans
    } else return a
}