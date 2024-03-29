const solution = myString => {
    const alphabetMap = Array(52).fill(0)
    myString.split("").forEach(c => {
        if (c === c.toLowerCase()) alphabetMap[c.charCodeAt() - (97 - 26)]++
        else alphabetMap[c.charCodeAt() - 65]++
    })
    return alphabetMap
}