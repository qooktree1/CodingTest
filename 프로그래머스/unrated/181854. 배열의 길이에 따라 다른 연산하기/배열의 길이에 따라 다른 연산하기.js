function solution(arr, n) {
    if (arr.length % 2) return arr.map((num, i) => {
        if (i % 2 === 0) return num + n
        else return num
    })
    return arr.map((num, i) => {
        if (i % 2) return num + n
        else return num
    })
}