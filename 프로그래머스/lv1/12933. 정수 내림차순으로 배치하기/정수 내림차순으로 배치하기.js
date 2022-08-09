function solution(n) {
    const newN = String(n)
    const nArr = newN.split("")
    nArr.sort()
    const reversedArr = nArr.reverse()    
    return Number(reversedArr.join(''))
}