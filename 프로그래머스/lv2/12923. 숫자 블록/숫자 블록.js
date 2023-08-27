// 본인제외 가장 큰 약수 출력
// 범위 실수 주의
const biggestPrimeNumber = n => {
    if (n === 1) return 0
    
    let maxNum = 1
    for (let i=2; i<=n**(1/2); i++){
        // i가 최대일때
        if (n % i === 0 && i <= 10000000){
            maxNum = Math.max(maxNum, i)
            
            // n/i가 최대일때
            if (n/i <= 10000000) maxNum = Math.max(maxNum, n/i)
        }
    }
    return maxNum
}


const solution = (begin, end) => {
    const ans = []
    for (let i=begin; i<=end; i++){
        ans.push(biggestPrimeNumber(i))
    }
    return ans
}