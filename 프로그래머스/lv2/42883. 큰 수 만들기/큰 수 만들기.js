const solution = (number, k) => {
    let answer = []
    
    for (let i = 0; i < number.length; i++){
        while (answer[answer.length-1] < number[i] && k > 0){
            k--
            answer.pop()
        }
        answer.push(number[i])
    }
    
    return answer.splice(0, answer.length - k).join("")
}