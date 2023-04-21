function solution(arr) {
    let N = 1
    while (N < arr.length) N *= 2
    while (arr.length < N) arr.push(0)
    return arr
}