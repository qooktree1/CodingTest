// 문제: 스티커 모으기(2)
// 시간: 45분
// 알고리즘: DP, [뜯었을 경우, 뜯지 않았을 경우] 로 나누자

// [14, 6, 5, 11, 3, 9, 2, 10]
const solution = sticker => {
    const N = sticker.length
    const dp1 = new Array(N).fill(0)
    const dp2 = new Array(N).fill(0)
    
    dp1[0] = sticker[0]
    dp1[1] = sticker[0]
    dp2[1] = sticker[1]
    
    for (let i=2; i<N; i++){
        // 첫번째 스티커 뜯을 경우
        if (i === N-1) dp1[i] = dp1[i-1]
        else dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i])
        
        // 두번쨰 스티커 뜯을 경우
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i])
    }
    return Math.max(dp1[N-1], dp2[N-1])
}