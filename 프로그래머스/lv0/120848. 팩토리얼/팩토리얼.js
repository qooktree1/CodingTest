function solution(n) {
    let answer = 1
    let number = 1
    while (n >= number){
        number *= answer
        answer += 1
    }
    return answer - 2
}