const dfs = (maps, visited, ex, ey) => {
    const q = [[0, 0]]
    const [n, m] = [maps.length, maps[0].length]
    visited[0][0] = 1
    
    while (q.length > 0) {
        const [x, y] = q.shift()
        if (x === ex && y === ey) return visited[x][y]
        for (let [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            let nx = x + dx
            let ny = y + dy
            
            if (0 <= nx && nx < n && 0 <= ny && ny < m && visited[nx][ny] === 0 && maps[nx][ny] === 1) {
                visited[nx][ny] = visited[x][y] + 1
                
                q.push([nx, ny])
            }
        }
    }
    
    return -1  // 도달할 방법이 없는 경우
}


const solution = maps => {
    const visited = Array.from(new Array(maps.length), () => Array(maps[0].length).fill(0))
    return dfs(maps, visited, maps.length - 1, maps[0].length - 1)
}