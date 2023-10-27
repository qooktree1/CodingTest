const solution = maps => {
    const visited = maps
    const [N, M] = [maps.length, maps[0].length]
    const q = [[0, 0, 1]]
    visited[0][0] = 1
    
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    
    while (q.length > 0){
        const [x, y, moves] = q.shift()
        if (x === N-1 && y === M-1) return visited[x][y]
        
        for (let d=0; d<4; d++){
            const [nx, ny] = [x + dx[d], y + dy[d]]
            
            if (0 <= nx && nx < N && 0 <= ny && ny < M && visited[nx][ny]){
                if (nx === N-1 && ny === M-1) return moves + 1
                q.push([nx, ny, moves + 1])
                visited[nx][ny] = 0
            }
        }
    }
    
    return -1
}