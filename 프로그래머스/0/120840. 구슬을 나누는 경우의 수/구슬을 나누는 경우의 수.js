const fact = (n) => {
    if (n <= 1) return n
    return n * fact(n - 1)
}

const solution = (balls, share) => Math.round(fact(balls) / (fact(Math.max(1, balls - share)) * fact(share)))