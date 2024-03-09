const solution = strArr => {
    const strObj = {}
    let maxGroupSize = 0
    
    for (const str of strArr) {
        const strLen = str.length
        strObj[strLen] = (strObj[strLen] ?? 0) + 1
        maxGroupSize = Math.max(maxGroupSize, strObj[strLen])
    }
    
    return maxGroupSize
}