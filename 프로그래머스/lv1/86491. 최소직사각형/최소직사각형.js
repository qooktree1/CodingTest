const solution = sizes => {
    let maxLen = Math.max(...sizes[0])
    let minLen = Math.min(...sizes[0])
    
    for (let i=1; i<sizes.length; i++){
        let maxNum = Math.max(...sizes[i])
        let minNum = Math.min(...sizes[i])
        
        maxLen = Math.max(maxLen, maxNum)
        minLen = Math.max(minLen, minNum)
    }
    return maxLen * minLen
}