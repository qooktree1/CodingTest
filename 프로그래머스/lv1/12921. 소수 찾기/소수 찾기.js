function solution(n) {
    let isPrime = true
    let cnt = 0
    
    for (let i=2; i <= n; ++i) {
        for (let j=2; j*j <= i; ++j) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
        
        if (isPrime === true) {
            cnt += 1
        }
        isPrime = true
    }
    return cnt
}