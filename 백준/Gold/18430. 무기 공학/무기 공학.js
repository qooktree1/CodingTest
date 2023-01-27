// 백준 제출 시
let input = require("fs").readFileSync("dev/stdin").toString().split("\n")

// Test
// let input = require("fs").readFileSync("example.txt").toString().split("\n")

const [N, M] = input[0].split(" ").map(Number)
const arr = []
for (let i=1; i <= N; i++) arr.push(input[i].replace("\r","").split(" ").map(Number))

const visited = Array.from(Array(N), () => Array(M).fill(false))
let answer = 0

function inRange(x, y){
    return x >= 0 && x < N && y >= 0 && y < M
}

function dfs(x, y, ssum){

    // 다음 줄로 이동
    if (y === M){
        x += 1
        y = 0
    }

    // 종료 조건
    if (x === N){
        answer = Math.max(answer, ssum)
        return
    }

    if (inRange(x, y-1) && inRange(x, y) && inRange(x+1, y) && !visited[x][y-1] && !visited[x][y] && !visited[x+1][y]){
        visited[x][y-1] = visited[x][y] = visited[x+1][y] = true
        dfs(x, y+1, ssum + 2 * arr[x][y] + arr[x][y-1] + arr[x+1][y])
        visited[x][y-1] = visited[x][y] = visited[x+1][y] = false
    }

    if (inRange(x, y-1) && inRange(x, y) && inRange(x-1, y) && !visited[x][y-1] && !visited[x][y] && !visited[x-1][y]){
        visited[x][y-1] = visited[x][y] = visited[x-1][y] = true
        dfs(x, y+1, ssum + 2 * arr[x][y] + arr[x][y-1] + arr[x-1][y])
        visited[x][y-1] = visited[x][y] = visited[x-1][y] = false
    }

    if (inRange(x-1, y) && inRange(x, y) && inRange(x, y+1) && !visited[x-1][y] && !visited[x][y] && !visited[x][y+1]){
        visited[x-1][y] = visited[x][y] = visited[x][y+1] = true
        dfs(x, y+1, ssum + 2 * arr[x][y] + arr[x-1][y] + arr[x][y+1])
        visited[x-1][y] = visited[x][y] = visited[x][y+1] = false
    }

    if (inRange(x+1, y) && inRange(x, y) && inRange(x, y+1) && !visited[x+1][y] && !visited[x][y] && !visited[x][y+1]){
        visited[x+1][y] = visited[x][y] = visited[x][y+1] = true
        dfs(x, y+1, ssum + 2 * arr[x][y] + arr[x+1][y] + arr[x][y+1])
        visited[x+1][y] = visited[x][y] = visited[x][y+1] = false
    }

    // 모두 해당 안될 경우 경로 이동
    dfs(x, y+1, ssum)

}

dfs(0, 0, 0)
console.log(answer)