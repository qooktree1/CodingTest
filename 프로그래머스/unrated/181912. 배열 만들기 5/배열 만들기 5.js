function solution(intStrs, k, s, l) {
    return intStrs.map(intStr => {
        if (Number(intStr.slice(s, s+l)) > k) return Number(intStr.slice(s, s+l))
    }).filter(x => x)
}