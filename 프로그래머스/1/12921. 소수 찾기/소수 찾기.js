const solution = n => {
    let answer = 0
    const numbers = Array(n+1).fill(0)
    for (let i=2; i<=n; i++) {
        numbers[i] = i
    }
    for (let i=2; i<=n; i++) {
        if (numbers[i] === 0) continue
        for (let j=i+i; j<=n; j+=i) {
            numbers[j] = 0
        }
    }
    for (let i=2; i<=n; i++) {
        if (numbers[i]) answer++
    }
    return answer
}