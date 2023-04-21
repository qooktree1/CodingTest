function solution(numLog) {
    let ans = ""
    numLog = [...numLog, 100]
    for (let i=0; i<numLog.length; i++){
        if (numLog[i] + 1 === numLog[i+1]) ans += "w"
        else if (numLog[i] - 1 === numLog[i+1]) ans += "s"
        else if (numLog[i] + 10 === numLog[i+1]) ans += "d"
        else if (numLog[i] - 10 === numLog[i+1]) ans += "a"
    }
    return ans
}