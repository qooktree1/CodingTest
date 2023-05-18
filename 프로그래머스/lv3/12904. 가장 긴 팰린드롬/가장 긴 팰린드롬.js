// 문제: 가장 긴 팰린드롬
// 시간: 36분
// 알고리즘: slicing, 홀수 짝수 나누기


const solution = s => {
    let ans = 0
    
    for (let i=0; i<s.length; i++){
        const tmp = s[i]
        let index = 1
        
        // 홀수
        while (i-index>=0 && i+index < s.length){
            if (s[i-index] === s[i+index]) index++
            else break
        }
        ans = Math.max(ans, (index-1) * 2 + 1)
        
        let index2 = 1
        // 짝수
        if (i+1 < s.length && tmp === s[i+1]){
            while (i-index2 >= 0 && i+index2+1 < s.length){
                if (s[i+index2+1] === s[i-index2]) index2++
                else break
            }
            ans = Math.max(ans, index2 *2)
        }
        
        
    }
    
    return ans
}