const solution = scores => {
    const sumScores = scores.map(score => score[0] + score[1])
    const sortedSumScores = sumScores.slice().sort((a,b) => b-a)
    return sumScores.map(score => sortedSumScores.indexOf(score) + 1)
}