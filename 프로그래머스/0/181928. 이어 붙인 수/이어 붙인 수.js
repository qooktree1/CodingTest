const solution = numList => {
    let oddStr = ''
    let evenStr = ''
    for (let i=0; i<numList.length; i++) {
        if (numList[i] % 2) oddStr += numList[i]
        else evenStr += numList[i]
    }
    return Number(oddStr) + Number(evenStr)
}