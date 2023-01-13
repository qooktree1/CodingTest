// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
// let input = require("fs").readFileSync("example.txt").toString().split("\n")
const [N, Q] = input[0].split(" ").map(Number)
const zone = []
for (let i=0; i < N+1; i++)zone.push([])

for (let i=1; i < N; i++){
    const [p, q, r] = input[i].replace("\r","").split(" ").map(Number)
    zone[p].push([q, r])
    zone[q].push([p, r])
}

function bfs(k, v){
    const visited = []
    for (let i=0; i < N+1; i++) visited.push(false)
    visited[v] = true

    const q = [v]  // 현재 노드
    let ans = 0
    while (q.length > 0){
        v = q.shift()

        // 연결된 노드 탐색
        for (let node of zone[v]){

            // 방문한적이 없고 주어진 k 이상의 USADO를 가질때
            if (!visited[node[0]] && node[1] >= k){
                q.push(node[0])
                ans += 1  // 연결된 동영상 개수
                visited[node[0]] = true  // 방문 표시
            }
        }
    }
    return ans
}

for (let kv = N; kv < Q+N; kv++){
    const [k, v] = input[kv].replace("\r","").split(" ").map(Number)
    console.log(bfs(k, v))   
}