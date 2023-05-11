// 문제: 합승 택시 요금
// 시간: 60분
// 알고리즘: 플로이드 와샬(Google)


const solution = (n, s, a, b, fares) => {
    const INF = Infinity
    const graph = Array(n).fill().map(() => Array(n).fill(INF))
    
    // 경로 넣기
    fares.forEach(fare => {
        const [x, y, cost] = fare
        graph[x-1][y-1] = cost
        graph[y-1][x-1] = cost
    })
 
    // 자기 자신에 대한 최단 경로는 0
    for (let i=0; i<n; i++) graph[i][i] = 0
    
    
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            for (let k=0; k<n; k++){
                graph[j][k] =  Math.min(graph[j][k], graph[j][i] + graph[i][k])
            }
        }
    }
    
    let ans = INF
    for (let i=0; i<n; i++){
        ans = Math.min(ans, graph[s-1][i] + graph[i][a-1] + graph[i][b-1])
    }
    return ans
}