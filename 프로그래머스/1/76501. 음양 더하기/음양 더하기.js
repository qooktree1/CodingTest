const solution = (absolutes, signs) => {
    return absolutes.reduce((a,b, i) => {
        if (signs[i]) return a + b
        return a - b
    }, 0)
}