// 문제: 전력망을 둘로 나누기
// 시간: 44분
// 알고리즘: DFS, 각 DFS 결과값 마다 차이값 중 최소값 구하기

const dfs = (arr, x) => {
    let cnt = 0
    for (let i=1; i<= arr[x].length; i++){
        if (arr[x][i]){
            
            arr[x][i] = 0
            arr[i][x] = 0
            cnt += 1 + dfs(arr, i)
        }
    }
    return cnt
}


const solution = (n, wires) => {
    const graph = Array.from(Array(n+1), () => Array(n+1).fill(0))
    let ans = Infinity
    wires.forEach(wire => {
        graph[wire[0]][wire[1]] = 1
        graph[wire[1]][wire[0]] = 1
    })
    
    wires.forEach(wire => {
        const [x, y] = wire
        const tmp = graph.map(x => x.slice())  // 깊은 복사
        
        tmp[x][y] = 0
        tmp[y][x] = 0
        
        ans = Math.min(ans, Math.abs(dfs(tmp, x) - dfs(tmp, y)))
    })
    return ans
}