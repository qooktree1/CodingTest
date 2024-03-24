const solution = n => {
    let ssum = 0
    for (let i=1; i<=n; i++) {
        if (n % i === 0) ssum += i
    }
    return ssum
}