function solution(arr, queries) {
    for (const query of queries){
        const [s, e] = [query[0], query[1]]
        for (let i=s; i<=e; i++){
            arr[i] ++
        }
    }
    return arr
}