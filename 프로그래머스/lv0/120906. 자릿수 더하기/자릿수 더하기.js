function solution(n) {
    let answer = 0
    while (true){
        if (n < 10) return answer + n
        answer += parseInt(n % 10)
        n = parseInt(n / 10)
    }
}