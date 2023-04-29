// 문제: 뒤에 있는 큰 수 찾기
// 시간:
// 알고리즘:


function solution(numbers) {
    const answer = Array(numbers.length).fill(-1)
    const stack = []
    for (let i=0; i<numbers.length; i++){
        while (stack.length > 0 && numbers[stack[stack.length-1]] < numbers[i]) answer[stack.pop()] = numbers[i]
        stack.push(i)
    }
    
    return answer
}