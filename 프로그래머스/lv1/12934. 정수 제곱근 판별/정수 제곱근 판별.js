function solution(n) {
    const num = n ** (1/2)
    if (Number.isInteger(num)) {
        return (num+1) ** 2
    } else {
        return -1
    }
}