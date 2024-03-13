const solution = arr => {
    const colLen = arr.length
    const rowLen = arr[0].length
    
    if (colLen === rowLen) return arr
    if (colLen > rowLen) {
        return arr.map(a => [...a, ...new Array(Math.max(colLen-rowLen, 0)).fill(0)])
    } else {
        return [...arr, ...Array.from(new Array(rowLen - colLen), () => Array(rowLen).fill(0))]
    }
}