// 문제: 배달
// 시간: 38분
// 알고리즘: DFS


const solution = (N, road, K) => {
    
    const graph = Array.from(Array(N+1), () => [])
    const distance = Array(N+1).fill(10000001)  // 마을의 거리 배열
    road.forEach(r => {
        const [a, b, c] = r
        graph[a].push([b, c])
        graph[b].push([a, c])
    })
    
    distance[1] = 0  // 1에서 출발
    const ans = []
    const stack = [[1, 0]]  // [village, cost]
    while (stack.length > 0){
        const [x, cost] = stack.pop()
        
        graph[x].forEach(node => {
            const [newX, newCost] = node
            
            if (newCost + distance[x] < distance[newX]){
                distance[newX] = distance[x] + newCost
                stack.push(node)
            }
        })
    }
    return distance.filter(x => x <= K).length  // K 이하의 시간이 가능한 마을의 개수
}