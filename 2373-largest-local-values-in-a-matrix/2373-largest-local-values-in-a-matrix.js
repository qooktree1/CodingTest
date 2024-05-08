const largestLocal = grid => {
    const N = grid.length
    const answer = []
    let maxValue
    for (let i=0; i<N - 2; i++) {
        const tmpArr = []
        for (let j=0; j<N - 2; j++) {
            maxValue = 0
            for (let k=0; k<3; k++) {
                for (let l=0; l<3; l++) {
                    maxValue = Math.max(maxValue, grid[i+k][j+l])
                }
            }
            tmpArr.push(maxValue)
        }
        answer.push(tmpArr)
    }
    return answer
}