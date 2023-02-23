function solution(array, n) {
    array.sort((a,b) => a-b)
    const result = []
    for (let i=0; i<array.length; i++) result.push(Math.abs(n-array[i]))
    const answerIndex = Math.min(...result)
    return array[result.indexOf(answerIndex)]
}