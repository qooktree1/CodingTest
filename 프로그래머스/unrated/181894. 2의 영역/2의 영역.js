function solution(arr) {
    if (arr.includes(2) === false) return [-1]
    const first = arr.indexOf(2)
    const second = arr.lastIndexOf(2)
    return arr.slice(first, second+1)
}