function solution(n) {
    let answer = 1
    while (true){
        if ((answer*6) % n !== 0) answer += 1
        else return answer
    }
}