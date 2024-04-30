const solution = (k, m, score) => {
    let answer = 0
    score.sort((a,b) => b-a)
    for (let i=0; i<Math.floor(score.length / m); i++) {
        answer += score[i * m + m - 1] * m
    }
    return answer
}