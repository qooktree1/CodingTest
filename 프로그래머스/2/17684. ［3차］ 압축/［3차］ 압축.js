const solution = msg => {
    const alphabetDict = {}
    const answer = []
    let index = 0
    for (let i="A".charCodeAt(); i<="Z".charCodeAt(); i++) {
        alphabetDict[String.fromCharCode(i)] = ++index
    }
    
    for (let i=0; i<msg.length; i++) {
        let j = i
        while (j < msg.length) {
            if (!(msg.slice(i, j + 1) in alphabetDict)) break
            j++
        }
        
        answer.push(alphabetDict[msg.slice(i, j)])
        alphabetDict[msg.slice(i, j + 1)] = ++index
        i = j - 1
    }
    return answer
}