const diagonalSum = mat => {
    const n = mat.length
    let answer = 0
    for (let i=0; i<n; i++) {
        answer += mat[i][i] + mat[i][mat.length - i - 1]
        console.log(answer)
    }
    return n % 2 ? answer  - mat[Math.floor(n / 2)][Math.floor(n / 2)] : answer
}
