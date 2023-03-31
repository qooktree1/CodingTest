function solution(n, m, section) {
    let answer = 0
    let check = 0
    section.forEach((s => {
        if (s > check){
            answer++
            check = s + m - 1
        }
    }))
    return answer
}