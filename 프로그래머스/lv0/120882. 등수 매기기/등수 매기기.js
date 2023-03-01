function solution(score) {
    const newScore = score.map(s => (s[0] + s[1]) / 2)
    const answer = new Array(score.length).fill(1)
    for (let i=0; i<newScore.length; i++){
        for (let j=0; j<newScore.length; j++){
            if (newScore[i] < newScore[j]) answer[i]++
        }
    }
    return answer
}