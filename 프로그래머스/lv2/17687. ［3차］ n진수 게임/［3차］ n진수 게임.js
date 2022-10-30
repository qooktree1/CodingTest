// n: 진법, t: 미리 구할 숫자의 갯수, m: 참가 인원, p: 튜브의 순서
function solution(n, t, m, p) {
    let answer = ""
    let number = 0
    let allNumber = ""
    for (let number=0; number <= 100000; number++){
        allNumber += number.toString(n).toUpperCase()
    }
    
    for (let i = 0; i < t; i++){
        answer += allNumber[p-1 + m * i]
    }
    return answer
}