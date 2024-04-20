const POSSIBLE_BABBLING = new Set()
const BABBLING_WORDS = ["aya", "ye", "woo", "ma"]

const dfs = (s, visited, cnt) => {
    if (s) POSSIBLE_BABBLING.add(s)
    if (cnt >= 4) return
    
    for (let i=0; i<4; i++) {
        if (!visited[i]) {
            visited = true
            dfs(s + BABBLING_WORDS[i], visited, cnt + 1)
            visited = false
        }
    }
}

const solution = babbling => {
    dfs("", [false, false, false, false], 0)
    return babbling.filter(word => POSSIBLE_BABBLING.has(word)).length
}