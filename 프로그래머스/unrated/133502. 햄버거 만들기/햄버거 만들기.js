function solution(food) {
    // 1->2->3->1 : 순서
    let answer = 0
    let i = 0
    while (true){
        if (food[i] === 1 && food[i+1] === 2 && food[i+2] === 3 && food[i+3] === 1){
            food.splice(i, 4)
            answer++
            
            if (i !== 0) i-= 3
        }
        else if (i > food.length-3) break
        else i++
    }
    return answer
}