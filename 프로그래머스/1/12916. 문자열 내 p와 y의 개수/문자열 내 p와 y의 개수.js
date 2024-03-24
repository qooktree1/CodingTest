const solution = s => {
    s = s.toLowerCase()
    let pCnt = 0, yCnt = 0
    s.split("").forEach(c => {
        if (c === 'p') pCnt++
        else if (c === 'y') yCnt++
    })
    return pCnt === yCnt ? true : false
}