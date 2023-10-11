const solution = s => {
    let stack = 0
    s.split("").forEach(c => {
        if (stack === 0) stack += 1
        else if (c === ")") stack -= 1
        else if (c === "(") stack += 1
        
        if (stack === -1) return false
    })
    if (stack > 0) return false
    return true
}