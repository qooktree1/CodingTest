const solution = (d, budget) => {
    d.sort((a,b) => a-b)
    let idx = 0
    while (budget >= d[idx]) budget -= d[idx++]
    return idx
}