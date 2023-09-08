const solution = (n, computers) => {
    const visited = Array(n).fill(0)
    let ans = 0
    
    for (let i=0; i < n; i++){
        if (!visited[i]){
            dfs(i, visited, computers)
            ans++
        }
    }
    return ans
}

const dfs = (node, visited, computers) => {
    visited[node] = 1
    for (let i=0; i<computers.length; i++){
        if (computers[node][i] === 1 && !visited[i]){
            dfs(i, visited, computers)
        }
    }
}