function bfs(start, graph, distance){
    q = []
    q.push(start)
    distance[1] = 1
    while (q.length) {
        x = q.shift()
        graph[x].forEach(n_x => {
            if (distance[n_x] === 0) {
                q.push(n_x)
                distance[n_x] = distance[x] + 1
            }
        })
        
    }
    return distance
}

function solution(n, edge) {
    
    // 빈 배열로 이루어진 2차원 배열
    const graph = new Array(n + 1).fill().map(_ => [])
    
    // of : 배열 for문
    for (const e of edge) {
        graph[e[0]].push(e[1])
        graph[e[1]].push(e[0])
    }
    
    const distance = new Array(n+1).fill(0)
    
    const result = bfs(1, graph, distance)
    const resultMax = Math.max(...result) // 최대값
    const answer = result.filter(num => num == resultMax).length // 최대값의 개수 구하기
    return answer
}