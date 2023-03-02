function solution(food) {
    food = food.slice(1)
    for (let i=0; i<food.length; i++) if (food[i] % 2 !== 0) food[i] -= 1
    let answer = "0"
    
    for (let i=food.length-1; i>=0; i--){
        let tmp = ""
        for (let j=0; j<food[i]/2; j++){
            tmp += i+1
        }
        answer = tmp + answer + tmp
    }
    return answer
}