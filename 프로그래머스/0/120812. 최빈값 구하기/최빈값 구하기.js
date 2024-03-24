const solution = array => {
    const numberObj = {}
    for (const num of array) {
        numberObj[num] = numberObj[num] ? numberObj[num] + 1 : 1
    }
    const sortedArr = Object.entries(numberObj).sort((a,b) => b[1] - a[1])
    if (sortedArr.length >= 2 && sortedArr[0][1] === sortedArr[1][1]) return -1
    return +sortedArr[0][0]
}