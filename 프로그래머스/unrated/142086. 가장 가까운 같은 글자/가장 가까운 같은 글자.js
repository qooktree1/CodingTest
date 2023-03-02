function solution(s) {
    const answer = []
    const check = []
    for (let i=0; i<s.length; i++){
        if (!check.includes(s[i])){
            answer.push(-1)
            check.push(s[i])
        } else {
            for (let j=i-1; j >= 0; j--){
                if (s[i] === s[j]){
                    answer.push(Math.abs(i-j))
                    break
                }
            }
        }
    }
    return answer
}