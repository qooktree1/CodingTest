// 문제: 가장 큰 정사각형 찾기
// 시간: 30분
// 알고리즘: DP


const solution = board => {
    let ans = 0
    const N = board.length
    const M = board[0].length
    let tmp
    
    if (N <= 1 || M <= 1) return 1  // 행 or 열이 1일 경우 1 return
    
    for (let i=1; i<N; i++){
        for (let j=1; j<M; j++){
            if (board[i][j] !== 0){  // 현재 1로 채워져있을 경우
                tmp = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1])  // 왼쪽, 위, 대각선 확인하여 최솟값 갱신
                board[i][j] = tmp + 1
            }
            ans = Math.max(ans, board[i][j])
        }
    }
    return ans ** 2
}