function solution(n) {
    const answerString = []
    for (let i=1; i<=n; i++) if (i % 2 !== 0) answerString.push(i)
    return answerString
}