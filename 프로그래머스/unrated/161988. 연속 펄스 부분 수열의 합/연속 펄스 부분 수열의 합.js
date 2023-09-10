function solution(s) {
    const positiveS = []
    const negativeS = []
    let ans = 0
    
    for (let i=0; i<s.length; i++){
        if (i === 0){
            positiveS.push(s[i])
            negativeS.push(-s[i])
        }
        
        // 짝수일 경우
        else if (i % 2 === 0) {
            positiveS.push(Math.max(s[i], positiveS[i-1] + s[i]))
            negativeS.push(Math.max(-s[i], negativeS[i-1] - s[i]))
        } else if (i % 2 !== 0) {
            positiveS.push(Math.max(-s[i], positiveS[i-1] - s[i]))
            negativeS.push(Math.max(s[i], negativeS[i-1] + s[i]))
        }
        ans = Math.max(ans, positiveS[i], negativeS[i])
    }
    return ans
}