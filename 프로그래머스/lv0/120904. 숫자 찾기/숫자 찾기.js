function solution(num, k) {
    const answer = String(num).split("").indexOf(String(k))
    if (answer !== -1) return answer + 1
    else return answer
}