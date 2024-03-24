function solution(arr) {
    if (arr.length === 1) return [-1]
    const minNum = Math.min(...arr)
    const minNumIndex = arr.indexOf(minNum)
    return [...arr.slice(0, minNumIndex), ...arr.slice(minNumIndex + 1)]
}