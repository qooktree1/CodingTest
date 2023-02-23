function solution(before, after) {
    const a = before.split("").sort()
    const b = after.split("").sort()
    return (a.toString() == b.toString()) ? 1 : 0
}