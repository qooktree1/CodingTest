function solution(a, b, n) {
    let answer = 0
    while (a <= n){
        answer += parseInt(n / a) * b
        n = parseInt(n / a) * b + n % a
    }
    return answer
}