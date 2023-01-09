// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
// let input = require("fs").readFileSync("example.txt").toString().split("\n")
const N = Number(input[0])
const stations = []
for (let i=0; i <= N+1; i++){
    stations.push([])
}
for (let i=1; i < N; i++){
    let [a, b] = input[i].replace("\r","").split(" ").map(Number)
    stations[b].push(a)
}

function dfs(node, visited){
    visited[node] = true
    for (let nextNode of stations[node]){
        if (!visited[nextNode]) dfs(nextNode, visited)
    }
}

let answer = -1
for (let i=1; i <= N; i++){  // 정점 i에서 출발하여 모든 정점 방문할 수 있는 i 출력
    const visited = Array(N+1).fill(false)
    dfs(i, visited)
    if (visited.filter(x => x === true).length === N){
        answer = i
        break
    }
}
console.log(answer)