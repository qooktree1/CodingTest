function solution(queue1, queue2) {
    // 모든 큐의 원소의 합이 홀수면 각 큐의 원소 합을 같게 만들 수 없음
    if ([...queue1, ...queue2].reduce((pre, value) => pre += value, 0) % 2 !== 0) return -1
    
    // 각 큐의 원소 합
    let sumQueue1 = queue1.reduce((pre, value) => pre += value, 0)
    let sumQueue2 = queue2.reduce((pre, value) => pre += value, 0)
    
    // 각 큐를 2번 반복하게 나열하여 포인터를 사용하게 만듦
    // ex. 3, 2, 7, 2, 4, 6, 5, 1,      3, 2, 7, 2, 4, 6, 5, 1
    const allArray = [...queue1, ...queue2, ...queue1, ...queue2]
    let count = start = 0
    let end = queue1.length - 1
    while (end < queue1.length * 4) {
        if (sumQueue1 < sumQueue2) {
            end += 1
            sumQueue1 += allArray[end]
            sumQueue2 -= allArray[end]
            count += 1
        } else if (sumQueue1 > sumQueue2) {
            sumQueue1 -= allArray[start]
            sumQueue2 += allArray[start]
            start += 1
            count += 1
        } else {
            return count
        }
    }
    return -1
}