const largestAltitude = gain => {
    let answer = 0
    let curr = 0
    for (let i = 0; i < gain.length; i++) {
        curr += gain[i]
        answer = Math.max(answer, curr)
    }
    return answer
}