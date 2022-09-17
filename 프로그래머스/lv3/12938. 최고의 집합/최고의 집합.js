function solution(n, s) {
    if (s < n) {
        return [-1]
    }
    
    const a = parseInt(s / n)
    const b = s % n
    const answer = Array(n).fill(a)  // [a] * n in python
    
    for (let i=0; i< b; ++i){
        answer[i] += 1
    }
    
    // sort -> 항상 두 요소를 비교하여 작동. 결과가 0보다 작으면 a 먼저 표시, 크면 b 먼저 표시되는 원리
    answer.sort((a, b) => a - b)
    
    return answer
}
