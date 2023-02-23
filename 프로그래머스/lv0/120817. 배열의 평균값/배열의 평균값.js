function solution(numbers) {
    const result = numbers.reduce((sum, cur) => sum+cur, 0)
    return result / numbers.length
}