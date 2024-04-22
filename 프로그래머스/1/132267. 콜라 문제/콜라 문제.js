const solution = (a, b, n) => {
    let answer = 0
    while (a <= n) {
        const returnCoke = Math.floor(n / a) * b
        answer += returnCoke
        n = returnCoke + n % a
    }
    return answer
}