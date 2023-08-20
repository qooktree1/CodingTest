// 2중 for문 시간초과
const solution = (r1, r2) => {
    let ans = 0
    
    for (let i=1; i<=r2; i++){  // 원점부터 시작하면 점들이 중복되기 때문에 1부터 시작(ex. [0,2], [0,3])
        let s, e  // s: 최소값, e: 최대값
        if (r1 >= i) s = Math.ceil(Math.sqrt(r1**2 - i**2))
        else s = 0  // r1 < i 일경우 y좌표의 최솟값은 0
        
        e = Math.floor(Math.sqrt(r2**2-i**2))
        ans += e - s + 1  // 해당 x좌표 내의 y좌표 점들의 개수
    }
    return ans * 4  // 1 사분면 * 4
}