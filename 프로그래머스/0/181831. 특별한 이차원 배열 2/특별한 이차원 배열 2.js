const solution = arr => {
    for (let i=0; i<=arr.length / 2; i++) {
        for (let j=0; j<=arr[0].length / 2; j++) {
            if (arr[i][j] !== arr[j][i]) return 0
        }
    }
    return 1
}