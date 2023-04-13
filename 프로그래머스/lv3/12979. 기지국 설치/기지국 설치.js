// 문제: 기지국 설치
// 시간: 

function solution(n, stations, w) {
    let tmp = 0
    let answer = 0
    const width = w * 2 + 1
    
    let prev = 0
    for (let i=0; i<stations.length; i++){
        if ((stations[i] - w - 1) - prev > 0){
            tmp = (stations[i] - w - 1) - prev
            
            if (w * 2 + 1 > tmp) answer++
            else if (tmp % width === 0) answer += parseInt(tmp / width)
            else answer += parseInt(tmp / width) + 1
        }
        prev = stations[i] + w
    }
    if (n - prev > 0){
        tmp = n - prev
        if (w * 2 + 1 > tmp) answer++
        else if (tmp % width === 0) answer += parseInt(tmp / width)
        else answer += parseInt(tmp / width) + 1
    }
    
    return answer
}