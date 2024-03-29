// 문제: 혼자 놀기의 달인
// 시간: 35분
// 알고리즘: DFS


const solution = cards => {
    let ans = []
    const visited = Array(cards.length).fill(false)
    
    const dfs = (start, cards, visit, ssum) => {
        if (!visit[start-1]){
            visit[start-1] = true
            dfs(cards[start-1], cards, visit, [...ssum, cards[start-1]])
        }
        else {
            ans.push(ssum.length)
            console.log(ssum)
            return
        }
    }
    
    for (let i=0; i<cards.length; i++){
        if (!visited[i]) dfs(cards[i], cards, visited, [])
    }
    
    if (ans.length === 1) return 0
    ans.sort((a,b) => b-a)
    
    return ans[0] * ans[1]
}