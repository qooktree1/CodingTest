// BFS
function solution(begin, target, words) {
    let ans = 0
    
    // 포함이 안되어 있으면 return 0
    const firstCheck = words.filter(x => x === target)
    if (firstCheck.length === 0) return 0
    
    const q = [[begin, 0]]
    
    while (q.length !== 0) {
        let [newWord, cnt] = q.shift() // 배열에서 첫 번째 요소 제거
        
        if (newWord === target) return cnt // target에 도착하면 return
        
        words.forEach((word, index) => {
            let diff = 0
            
            for (let i=0; i < word.length; ++i) {
                if (word[i] !== newWord[i]) diff += 1
            }
            
            if (diff === 1) q.push([word, cnt+1])
        })
        
    }
    
}