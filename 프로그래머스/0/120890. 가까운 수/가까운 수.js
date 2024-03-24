const solution = (array, n) => {
    const arrayMap = {}
    for (const num of array) arrayMap[num] = Math.abs(n - num)
    const sortedArr = Object.entries(arrayMap).sort((a,b) => a[1] - b[1])
    return +sortedArr[0][0]
}