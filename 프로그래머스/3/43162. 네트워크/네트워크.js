const dfs = (computers, visited, v) => {
    visited[v] = true
    for (let i=0; i<computers.length; i++) {
        if (computers[v][i] === 1 && !visited[i]) {
            visited[i] = true
            dfs(computers, visited, i)
        }
    }
}


const solution = (n, computers) => {
    const visited = new Array(n).fill(false)
    let answer = 0
    for (let i=0; i<computers.length; i++) {
        if (!visited[i]) {
            answer++
            dfs(computers, visited, i)
        }
    }
    return answer
}