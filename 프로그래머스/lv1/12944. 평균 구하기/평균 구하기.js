function solution(arr) {
    const sumArr = arr.reduce((pre, cur) => pre + cur, 0)
    return sumArr / arr.length
}