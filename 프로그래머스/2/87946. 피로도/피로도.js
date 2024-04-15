let answer = 0


const dfs = (cnt, fatigue, dungeons, visited) => {
    for (let i=0; i<dungeons.length; i++) {
        if (!visited[i] && fatigue >= dungeons[i][0]) {
            visited[i] = true
            dfs(cnt + 1, fatigue - dungeons[i][1], dungeons, visited)
            visited[i] = false
        }
    }
    answer = Math.max(answer, cnt)
    return
}


const solution = (k, dungeons) => {
    const visited = new Array(dungeons.length).fill(false)
    
    dfs(0, k, dungeons, visited)
    return answer
}