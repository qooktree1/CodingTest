const solution = (arr1, arr2) => {
    const A = arr1.length
    const B = arr2.length
    if (A > B) return 1
    if (A < B) return -1
    
    const aSum = arr1.reduce((a,b) => a+b, 0)
    const bSum = arr2.reduce((a,b) => a+b, 0)
    if (aSum > bSum) return 1
    if (aSum < bSum) return -1
    return 0
}