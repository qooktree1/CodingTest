function solution(num, total) {
    let x = 0
    for (let i=1; i<num; i++) x += i
    const startNumber = (total - x) / num
    const answer = []
    for (let index=startNumber; index<startNumber+num; index++) answer.push(index)
    return answer
}