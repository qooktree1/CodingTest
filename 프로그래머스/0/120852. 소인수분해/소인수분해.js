const solution = n => {
    const answer = new Set()
    while (n > 1) {
        for (let i=2; i<=n; i++) {
            if (n % i === 0) {
                answer.add(i)
                n /= i
                break
            }
        }
    }
    return [...answer]
}