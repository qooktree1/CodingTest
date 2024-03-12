const solution = numList => {
    const answer = []
    for (let i=0; i<numList.length; i++) {
        answer.push(numList[numList.length - 1 - i])
    }
    return answer
}