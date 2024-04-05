const solution = n => {
    let s = 0, e = 0
    let ssum = 0
    let answer = 0
    while (s <= e && e <= n) {
        if (e === n && ssum < n) return answer
        if (ssum < n) ssum += ++e
        else if (ssum >= n) {
            if (ssum === n) answer++
            ssum -= ++s
        }
    }
    return answer
}