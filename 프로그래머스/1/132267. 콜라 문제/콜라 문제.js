const solution = (a, b, n) => {
    let answer = 0
    while (n >= 2) {
        if (n < a) return answer
        const returnCoke = Math.floor(n / a) * b
        answer += returnCoke
        n = returnCoke + n % a
    }
    return answer
}