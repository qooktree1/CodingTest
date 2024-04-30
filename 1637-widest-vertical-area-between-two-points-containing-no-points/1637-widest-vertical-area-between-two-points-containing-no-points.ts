const maxWidthOfVerticalArea = (points: number[][]): number => {
    let answer = 0
    const pointsLen = points.length
    points.sort((a, b) => a[0] - b[0])
    for (let i=1; i<points.length; i++) {
        answer = Math.max(answer, points[i][0] - points[i-1][0])
    }
    return answer
}