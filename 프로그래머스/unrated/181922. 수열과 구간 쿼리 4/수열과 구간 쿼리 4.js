function solution(arr, queries) {
    for (const query of queries){
        const [s, e, k] = [query[0], query[1], query[2]]
        for (let i=s; i<=e; i++){
            if (i % k === 0) arr[i]++
        }
    }
    return arr
}