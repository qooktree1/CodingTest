function solution(date1, date2) {
    let ans = 0
    const date1Sum = date1[0] * 28 * 12 + date1[1] * 28 + date1[2]
    const date2Sum = date2[0] * 28 * 12 + date2[1] * 28 + date2[2]
    return date2Sum - date1Sum > 0 ? 1 : 0
}