// 문제: 124 나라의 숫자
// 시간: 43분
// 알고리즘: n을 3으로 나누며 숫자를 구한다(패턴 찾기)

function solution(n) {
    let answer = ""
    if (n < 3) return n.toString()
    else if (n === 3) return "4"
    
    
    while (n > 0){
        if (n % 3 === 0){
            answer = "4" + answer
            n = parseInt(n / 3) - 1
        }
        else if (n % 3 === 1){
            answer = "1" + answer
            n = parseInt(n / 3)
        }
        else if (n % 3 === 2){
            answer = "2" + answer
            n = parseInt(n / 3)
        }
    }

    
    return answer
}