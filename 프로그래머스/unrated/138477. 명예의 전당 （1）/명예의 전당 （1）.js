function solution(k, score) {
    let scoreCheck = []
    let tmpCheck = []
    const sortingScore = [...score]
    const answer = []
    for (let i=0; i<score.length; i++){
        scoreCheck = score.slice(0,i+1)
        let sortedScore = scoreCheck.sort((a,b) => b-a)
        if (k > sortedScore.length) answer.push(sortedScore[sortedScore.length-1])
        else answer.push(sortedScore[k-1])
    }
    
    return answer
}