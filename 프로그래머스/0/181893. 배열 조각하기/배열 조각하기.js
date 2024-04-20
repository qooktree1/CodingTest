function solution(arr, query) {
    query.forEach((_, i) => {
        if (i % 2 === 0) arr = arr.slice(0, _ + 1)
        else arr = arr.slice(_)
    })
    return arr
}