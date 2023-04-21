function solution(n) {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const ans = Array.from(Array(n), () => Array(n).fill(0))
    ans[0][0] = 1
    let [x, y, num, d] = [0, 0, 2, 0]
    let nx, ny
    while (num <= n**2){
        nx = x + dx[d]
        ny = y + dy[d]
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || ans[nx][ny] !== 0) d = (d+1) % 4
        else {
            ans[nx][ny] = num
            num++
            x = nx
            y = ny
        }
    }
    return ans
}