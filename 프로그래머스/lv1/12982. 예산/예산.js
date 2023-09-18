const solution = (d, budget) => {
    d.sort((a,b) => a-b)  // 오름차순 정렬
    let answer = 0
    let total = 0
    
    for (let i=0; i<d.length; i++){
        total += d[i]
        answer++
        if (total > budget){
            return answer - 1
        }
    }
    
    return answer
}