const solution = s => {
    let answer = 0
    while (s.length > 0) {
        const start = s[0]
        let startCnt = 1
        let otherCnt = 0
        for (let i=1; i<s.length; i++) {
            if (s[i] === start) startCnt++
            else otherCnt++
            if (startCnt === otherCnt) {
                answer++
                s = s.slice(i+1)
                break
            }
        }
        if (startCnt !== otherCnt) return answer + 1
    }
    return answer
}