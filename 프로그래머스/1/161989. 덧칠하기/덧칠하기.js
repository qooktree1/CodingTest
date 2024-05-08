const solution = (n, m, sections) => {
    let answer = 0
    const numbers = Array(n+1).fill(false)
    for (const section of sections) numbers[section] = true
    for (let i=1; i<=n; i++) {
        if (numbers[i]) {
            answer++
            for (let j=0; j<m; j++) {
                numbers[i + j] = false
            }
            i += m - 1
        }
    }
    return answer
}