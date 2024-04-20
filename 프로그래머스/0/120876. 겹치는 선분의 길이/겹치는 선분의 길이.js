const solution = lines => {
    const numObj = {}
    lines.forEach(([s, e]) => {
        for (let i = s; i < e; i++) {
            numObj[i] = (numObj[i] || 0) + 1
        }
    })
    return Object.values(numObj).filter(num => num >= 2).length
}