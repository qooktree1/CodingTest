function solution(arr, queries) {
    const ans = []
    for (const query of queries){
        const [s, e, k] = [query[0], query[1], query[2]]
        let num = 1000001
        for (let i=s; i<=e; i++){
            if (arr[i] > k) num = Math.min(num, arr[i])
        }
        if (num === 1000001) ans.push(-1)
        else ans.push(num)
    }
    return ans
}