function solution(numbers, k) {
    let answer = 0
    let tmp = 0
    for (let i=0; i<k-1; i++){
        tmp = (tmp+2) % numbers.length
        answer = numbers[tmp]
    }
    return answer
}