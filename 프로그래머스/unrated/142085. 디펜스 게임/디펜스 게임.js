// 이분탐색
const solution = (n, k, enemy) => {
    let ans = 0
    let [start, end] = [0, enemy.length]
    
    while (start <= end){
        let mid = Math.floor((start+end) / 2)
        let arr = enemy.slice(0, mid).sort((a,b) => b-a)
        
        let flag = true
        let tmp = 0  // 무적권 제외한 나머지 공격을 받을 수 있는 적의 수
        for (let i=k; i<arr.length; i++){
            tmp += arr[i]
            if (n < tmp) flag = false
        }
        if (flag){
            ans = mid
            start = mid + 1
        } else end = mid - 1
    }
    return ans
}