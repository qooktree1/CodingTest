// 문제: 큰 수 만들기
// 걸린 시간: 30분
// 알고리즘: stack을 이용하여 현재 숫자와 정답 배열 숫자의 크기를 비교하여 change
const solution = (number, k) => {
    let answer = []
    
    for (let i = 0; i < number.length; i++){
        while (answer[answer.length-1] < number[i] && k > 0){
            k--
            answer.pop()
        }
        answer.push(number[i])
    }
    
    return answer.splice(0, answer.length - k).join("")
}