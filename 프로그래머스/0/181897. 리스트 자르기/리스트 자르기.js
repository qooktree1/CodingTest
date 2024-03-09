const solution = (n, slicer, numbers) => {
    const [a, b, c] = slicer
    if (n === 1) return numbers.slice(0, b + 1)
    if (n === 2) return numbers.slice(a)
    if (n === 3) return numbers.slice(a, b + 1)
    if (n === 4) return numbers.slice(a, b + 1).filter((_, idx) => !(idx %= c))
}