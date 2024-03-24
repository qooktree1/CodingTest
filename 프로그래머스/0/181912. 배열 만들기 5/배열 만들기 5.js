const solution = (intStrs, k, s, l) => {
    return intStrs.map(intStr => {
        const num = intStr.split("").slice(s, s + l).join("")
        if (+num > k) return +num
    }).filter(x => x)
}