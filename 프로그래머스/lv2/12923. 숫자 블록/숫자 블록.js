// 본인제외 가장 큰 약수 출력
// 범위 실수 주의
const biggestPrimeNumber = n => {
    if (n === 1) return 0
    
    let maxNum = 1
    for (let i=2; i<=n**(1/2); i++){
        
        // n/i가 최대일때 - n이 작기 때문에 바로 break로 return
        if (n % i === 0 && n / i <= 1e7){
            maxNum = n / i
            break
        }
        
        // i가 최대일때 - 최대치 갱신
        else if (n % i === 0 && n / i > 1e7 && i <= 1e7 && i > maxNum){
            maxNum = i
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