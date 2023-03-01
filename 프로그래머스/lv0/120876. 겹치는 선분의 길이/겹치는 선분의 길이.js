function solution(lines) {
    const allLine = new Array(200).fill(0)
    let answer = 0
    for (let i=0; i<3; i++){
        for (let j=lines[i][0]; j<lines[i][1]; j++){
            allLine[j+100] += 1
        }
    }
    
    for (const num in allLine){
        if (allLine[num] > 1) answer += 1
    }
    return answer
}