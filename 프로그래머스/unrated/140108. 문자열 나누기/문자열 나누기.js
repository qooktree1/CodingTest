function solution(s) {
    let answer = 0  // 분해한 문자열의 개수
    let temp = ""  // 분해한 문자열을 임시 저장할 변수
    
    while (s.length > 0){
        let x = s[0]  // 첫 번째 글자
        let xCount = 1  // x가 나온 횟수
        let otherCount = 0  // x 이외의 글자가 나온 횟수
        
        for (let i=1; i<s.length; i++){
            if (s[i] === x) xCount++
            else otherCount++
            
            if (xCount === otherCount){
                answer++
                s = s.slice(i+1)
                break
            }
        }
        
        if (xCount !== otherCount){
            answer++
            break
        }
    }
    return answer
}