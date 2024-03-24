const solution = strArr => {
    const strLenArr = strArr.map(str => str.length)
    const numberMap = {}
    for (const num of strLenArr) {
        numberMap[num] = numberMap[num] ? numberMap[num] + 1 : 1
    }
    return Math.max(...Object.values(numberMap))
}