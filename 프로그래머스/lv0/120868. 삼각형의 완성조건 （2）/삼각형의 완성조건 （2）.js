function solution(sides) {
    const answer = []
    sides.sort((a,b) => b-a)
    
    // sides의 변 중 하나가 가장 긴 변일 경우
    for (let i=sides[0] - sides[1]+1; i<= sides[0]; i++) answer.push(i)
    
    // 가장 긴 변을 구하는 경우
    for (let i=sides[0]+1; i<sides[0] + sides[1]; i++) answer.push(i)
    return answer.length
}