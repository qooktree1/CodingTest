function solution(k, m, score) {
    let answer = 0
    score.sort((a,b) => b-a)
    const scoreCheck = []
    if (score.length % m !== 0) score = score.slice(0, score.length - (score.length % m))
    let index = 0
    
    while (index < score.length){
        
        let minScore = 10
        for (let i=index; i<index+m; i++){
            if (minScore > score[i]) minScore = score[i]
        }
        answer += minScore * m
        index += m
    }
    return answer
}
