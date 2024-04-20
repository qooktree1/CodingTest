const solution = (numer1, denom1, numer2, denom2) => {
    const denom = denom1 * denom2
    const numer = numer1 * denom2 + denom1 * numer2
    let gcd = 1
    for (let i=1; i<=Math.max(denom, numer); i++) {
        if (numer % i === 0 && denom % i === 0) gcd = i
    }
    return [numer / gcd, denom / gcd]
}