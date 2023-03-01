function solution(polynomial) {
    const array = polynomial.split(" + ")
    let onlyNumber = 0
    let xNumber = 0
    array.forEach(a => {
        if (a.includes("x")){
            const arr = a.split("x")
            
            if (arr[0] === "") xNumber += 1
            if (arr[0] !== "") xNumber += Number(arr[0])
        }
        if (!a.includes("x")) onlyNumber += Number(a)
    })
    if (onlyNumber === 0 && xNumber === 0) return "0"
    if (onlyNumber === 0 && xNumber !== 0) return xNumber === 1 ? "x": `${xNumber}x`
    if (onlyNumber !== 0 && xNumber === 0) return `${onlyNumber}`
    if (onlyNumber !== 0 && xNumber !== 0) return xNumber === 1 ? `x + ${onlyNumber}`: `${xNumber}x + ${onlyNumber}`
}