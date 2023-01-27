// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")

// Test
// let input = require("fs").readFileSync("example.txt").toString().split("\n")

const N = parseInt(input.shift())
const M = parseInt(input.shift())
const arr = []
for (let i=0; i < N; i++) arr.push(input.shift().trim().split(" ").map(Number))
const plans = input.shift().trim().split(" ").map(Number)
const visited = Array(N).fill(false)
let answer = "YES"
function dfs(s){
    visited[s] = true
    for (const [index, ns] of arr[s].entries()){
        if (ns === 1 && visited[index] === false){
            visited[index] = true
            dfs(index)
        }
    }
}

dfs(plans[0] - 1) // 시작지점

for (const plan of plans){
    if (visited[plan-1] === false) answer = "NO"
}
console.log(answer)