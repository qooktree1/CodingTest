// 문제: 입국심사
// 시간: 24분
// 알고리즘: 이분탐색

const solution = (n, times) => {
    let low = 0  // 최소 시간(정답)
    let high = n * Math.max(...times)  // 최대 시간
    let tmp, mid
    while (low <= high){
        mid = parseInt((low + high) / 2)  // 중간값
        tmp = 0
        
        // 모든 시간에 대하여 얼마만큼 심사할 수 있는 인원 구하기
        for (const time of times) tmp += parseInt(mid / time)
        
        if (tmp < n) low = mid + 1  // 심사할 수 있는 인원을 채우지 못하면 low 값 갱신
        else if (tmp >= n) high = mid - 1  // 충분하다면 high 값 갱신
    }
    return low
}