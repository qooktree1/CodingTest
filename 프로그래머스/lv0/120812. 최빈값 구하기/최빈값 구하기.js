function solution(array) {
    const checkDict = {}
    for (const a of array){
        if (!checkDict[a]) checkDict[a] = 1
        else checkDict[a] += 1
    }
    const maxValue = Math.max(...Object.values(checkDict))
    
    let answer = 0
    for (const check in checkDict){
        if (maxValue === checkDict[check]){
            if (answer !== 0) return -1
            else answer = check
        }
    }
    return Number(answer)
}