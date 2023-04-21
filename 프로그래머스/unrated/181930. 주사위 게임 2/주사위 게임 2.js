function solution(a, b, c) {
    const numbers = [...new Set([a, b, c])]
    if (numbers.length === 1) return (a+b+c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    if (numbers.length === 2) return (a+b+c) * (a**2 + b**2 + c**2)
    return a + b + c
    
}