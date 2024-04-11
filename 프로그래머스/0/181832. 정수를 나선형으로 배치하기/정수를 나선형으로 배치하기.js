const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

function solution(n) {
    let d = 0
    let num = 1
    let [x, y] = [0, 0]
    const answer = Array.from(Array(n), () => Array(n).fill(0))
    while (num <= n ** 2) {
        answer[x][y] = num
        const nx = x + dx[d % 4]
        const ny = y + dy[d % 4]
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || answer[nx][ny] !== 0) d++
        
        x += dx[d % 4]
        y += dy[d % 4]
        num++
    }
    return answer
}