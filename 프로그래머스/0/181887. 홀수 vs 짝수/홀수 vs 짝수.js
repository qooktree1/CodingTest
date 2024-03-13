const solution = numList => {
    let oddSum = 0
    let evenSum = 0
    for (let i=0; i<numList.length; i++) {
        if (i % 2) evenSum += numList[i]
        else oddSum += numList[i]
    }
    return evenSum > oddSum ? evenSum : oddSum
}