function solution(arr, queries) {
    for (const query of queries){
        const [s, e] = [query[0], query[1]]
        const tmp = arr[e]
        arr[e] = arr[s]
        arr[s] = tmp
    }
    return arr
}