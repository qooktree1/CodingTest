const solution = triangle => {
    for (let i=1; i<triangle.length; i++) {
        triangle[i][0] += triangle[i-1][0]
        for (let j=1; j<triangle[i].length - 1; j++) {
            triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j])
        }
        triangle[i][i] += triangle[i-1][i - 1]
    }
    return Math.max(...triangle[triangle.length - 1])
}