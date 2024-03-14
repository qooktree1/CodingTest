const solution = numbers => {
    numbers.sort((a,b) => a-b)
    const A = numbers[0] * numbers[1]
    const B = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return A > B ? A : B
}