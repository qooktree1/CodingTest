const solution = (n, left, right) => {
    const answer = []
    for (let i=left; i<=right; i++) {
        const quotient = Math.floor(i / n)
        const remainder = i % n
        answer.push(Math.max(quotient, remainder) + 1)
    }
    return answer
}