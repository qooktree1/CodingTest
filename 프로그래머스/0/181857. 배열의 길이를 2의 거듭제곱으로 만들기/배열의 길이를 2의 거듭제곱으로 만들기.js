const solution = arr => {
    const arrLen = arr.length
    let expandingArrLen
    for (let i=0; i<=10; i++) {
        if (expandingArrLen >= arrLen) break
        else expandingArrLen = 2 ** i
    }
    return [...arr, ...Array(expandingArrLen - arrLen).fill(0)]
}