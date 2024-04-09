const minimumSum = num => {
    num = String(num).replaceAll("0", "").split("").sort((a,b) => a-b)

    if (num.length === 1) return +num[0]
    if (num.length === 2) return +num[0] + +num[1]
    if (num.length === 3) return +(num[0] + num[2]) + +num[1]
    return +(num[0] + num[3]) + +(num[1] + num[2])
}