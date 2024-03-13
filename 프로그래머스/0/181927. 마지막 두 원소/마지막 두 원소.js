const solution = numList => {
    const prev = numList[numList.length - 1]
    const prevPrev = numList[numList.length - 2]
    if (prev > prevPrev) numList.push(prev - prevPrev)
    else numList.push(prev * 2)
    return numList
}