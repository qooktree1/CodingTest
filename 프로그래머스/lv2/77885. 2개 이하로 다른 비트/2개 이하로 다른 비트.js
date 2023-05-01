// 문제: 2개 이하로 다른 비트
// 시간: 24분
// 알고리즘: 짝수일때와 홀수일때 비교
// 짝수: 다음 수
// 홀수: 가장 마지막 0을 탐색후 해당 인덱스와 다음 인덱스 숫자 변환


const solution = numbers => {
    return numbers.map(num => {
        // 짝수일때
        if (num % 2 === 0) return num + 1
        
        // 홀수일때
        let n = "0" + num.toString(2)
        let index = n.lastIndexOf("0")
        
        const number = n.slice(0, index) + "10" + n.slice(index+2)
        return parseInt(number, 2)
        
    })
}