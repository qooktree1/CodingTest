const solution = s => {
    const cDict = {}
    const answer = []    
    for (let i=0; i<s.length; i++) {
        if (cDict[s[i]] === undefined) answer.push(-1)
        else answer.push(i - cDict[s[i]])
        cDict[s[i]] = i
    }
    return answer
}