function solution(k, dungeons) {
    let answer = 0
    const visited = new Array(dungeons.length).fill(0)
    const dfs = (k, dungeons, prev) => {
        for (let i=0; i<dungeons.length; i++){
            
            if (k >= dungeons[i][0] && visited[i] === 0){
                visited[i] = 1
                dfs(k-dungeons[i][1], dungeons, prev+1)
                visited[i] = 0
            }
            answer = Math.max(prev, answer)
        }
    }
    
    dfs(k, dungeons, 0)
    return answer
}