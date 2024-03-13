const solution = s => {
    const sArr = s.split(' ').map(Number)
    return `${Math.min(...sArr)} ${Math.max(...sArr)}`
}