// 문제: 미로탈출
// 시간: 47분
// 알고리즘: BFS

const dx = [-1, 1, 0, 0]
const dy = [0, 0, 1, -1]

const solution = maps => {
    let [sx, sy, ex, ey, lx, ly] = [0, 0, 0, 0, 0, 0]
    
    // 좌표 찾기
    for (let i=0; i<maps.length; i++){
        for (let j=0; j<maps[0].length; j++){
            if (maps[i][j] === "S"){
                sx = i
                sy = j
            }
            else if (maps[i][j] === "L"){
                lx = i
                ly = j
            }
            else if (maps[i][j] === "E"){
                ex = i
                ey = j
            }
        }
    }
    
    console.log(sx, sy, ex, ey, lx, ly)
    const a = bfs(maps, sx, sy, lx, ly)
    const b = bfs(maps, lx, ly, ex, ey)
    if (a === -1 || b === -1) return -1
    else return a + b
}


const bfs = (maps, x, y, endX, endY) => {
    const [N, M] = [maps.length, maps[0].length]
    const visited = Array.from(Array(N), () => Array(M).fill(0))
    const q = [[x, y]]
    while (q.length > 0){
        const [curx, cury] = q.shift()
        if (curx === endX && cury === endY) return visited[curx][cury]
        
        for (let d=0; d<4; d++){
            const nx = curx + dx[d]
            const ny = cury + dy[d]
            
            if (0 <= nx && nx < N && 0 <= ny && ny < M && visited[nx][ny] === 0 && maps[nx][ny] !== "X"){
                visited[nx][ny] = visited[curx][cury] + 1
                q.push([nx, ny])
            }
        }
    }
    
    return -1
}