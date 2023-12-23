let ans = 100
const dfs = (begin, target, words, visited) => {
    if (begin === target) {
        ans = Math.min(ans, visited.filter(x => x).length)
    }
    
    for (let i=0; i<words.length; i++) {
        if (!visited[i]) {
            let cnt = 0
            for (let j=0; j<words[i].length; j++) {
                if (begin[j] !== words[i][j]) cnt++
            }
            if (cnt === 1) {
                visited[i] = true
                dfs(words[i], target, words, visited)
                visited[i] = false
            }
        }
    }
}

const solution = (begin, target, words) => {
    const visited = Array(words.length).fill(false)
    dfs(begin, target, words, visited)
    return ans === 100 ? 0 : ans
}