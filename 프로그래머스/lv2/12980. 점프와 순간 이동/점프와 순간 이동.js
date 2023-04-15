// 문제: 점프와 순간 이동
// 시간: 13분
// 알고리즘: 홀수와 짝수로 분리하여 계산

const solution = n => {
    let ans = 0
    while (n > 1){
        if (n % 2 === 0){
            n /= 2
        } else {
            n -= 1
            n /= 2
            ans++
        }
    }
    return ans+1
}