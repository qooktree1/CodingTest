const solution = polynomial => {
    let numStack = 0
    let xStack = 0
    const polynomialArr = polynomial.split(" + ")
    let answer = ""
    polynomialArr.forEach(c => {
        if (!isNaN(c)) numStack += +c
        else xStack += c === "x" ? 1 : +c.slice(0, c.length - 1)
    })
    if (xStack && numStack) return `${xStack === 1 ? "" : xStack}x + ${numStack}`
    if (xStack) return `${xStack === 1 ? "" : xStack}x`
    return String(numStack)
}
