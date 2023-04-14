function solution(n) {
    const answer = new Array(n).fill().map((_, i) => Array(i + 1).fill(0))
    let N = 0
    for (let i=1; i <= n; i++) N += i
    let [x, y] = [0, 0]
    let mode = 0
    
    
    for (let i=1; i<=N; i++){
        answer[x][y] = i
        
        if (mode === 0){  // 왼쪽 아래
            if (x+1 >= n || answer[x+1][y] !== 0){
                mode = 1
                y++
            }
            else x++
            
            
        }
        
        else if (mode === 1){  // 오른쪽
            if (y+1 >= n || answer[x][y+1] !== 0){
                mode = 2
                x--
                y--
            }
            else y++
            
        }
        
        else if (mode === 2){  // 왼쪽 위
            if ((x === 0 && y === 0) || answer[x-1][y-1] !== 0){
                mode = 0
                x++
            } else {
                x--
                y--
            }
            
        }
    }
    
    return answer.reduce((acc, cur) => [...acc, ...cur])   
}