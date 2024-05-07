const solution = s => {
    const cDict = {}
    const answer = []    
    for (let i=0; i<s.length; i++) {
        answer.push(cDict[s[i]] === undefined ? -1 : i - cDict[s[i]])
        cDict[s[i]] = i
    }
    return answer
}