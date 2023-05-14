// 문제: 무인도 여행
// 시간: 35분
// 알고리즘: DFS


const solution = maps => {
    const ans = []
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    const [N, M] = [maps.length, maps[0].length]
    const visited = Array.from(Array(N), () => Array(M).fill(0))
    for (let i=0; i<N; i++){
        for (let j=0; j<M; j++){
            if (!visited[i][j] && maps[i][j] !== "X"){
                let nx = 0
                let ny = 0
                let ssum = Number(maps[i][j])
                visited[i][j] = 1
                const stack = [[i, j]]
                while (stack.length > 0){
                    const [newX, newY] = stack.pop()
                    
                    for (let d=0; d<8; d++){
                        nx = newX + dx[d]
                        ny = newY + dy[d]
                        if (0 <= nx && nx < N && 0 <= ny && ny < M && maps[nx][ny] !== "X" && !visited[nx][ny]){
                            ssum += Number(maps[nx][ny])
                            visited[nx][ny] = 1
                            stack.push([nx, ny])
                        }
                    }
                }
                ans.push(ssum)
                
                
            }
        }
    }
    
    ans.sort((a,b) => a-b)
    return ans.length > 0 ? ans : [-1]
}