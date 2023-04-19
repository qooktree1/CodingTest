const solution = (today, terms, privacies) => {
    const todayDate = today.split(".").map(Number)
    
    // term 정리
    const termDict = {}
    for(const term of terms){
        const tmp = term.split(" ")
        termDict[tmp[0]] = Number(tmp[1])
    }
    
    return privacies.map((privacy, i) => {
        const [privacyDate, termType] = privacy.split(" ")
        const curDate = privacyDate.split(".").map(Number)
        
        // 유효기간 더하기
        
        curDate[1] = curDate[1] + termDict[termType]
        if (curDate[1] > 12){
            curDate[0]++
            curDate[1] -= 12
        }
        
        // 기간 비교
        const todaySum = todayDate[0] * 12 * 28 + todayDate[1] * 28 + todayDate[2]
        const curSum = curDate[0] * 12 * 28 + curDate[1] * 28 + curDate[2]
        if (todaySum >= curSum) return i+1
        
    }).filter(x => x)
    
}