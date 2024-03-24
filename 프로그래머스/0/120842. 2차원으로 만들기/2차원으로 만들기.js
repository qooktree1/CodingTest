const solution = (numList, n) => {
    const answer = []
    const numLen = numList.length
    for (let i=0; i<numLen; i+= n) {
        answer.push(numList.slice(i, i + n))
    }
    return answer
}