const solution = n => {
    let ssum = 0
    for (let i=2; i<=n; i++) {
        if (i % 2 === 0) ssum += i
    }
    return ssum
}