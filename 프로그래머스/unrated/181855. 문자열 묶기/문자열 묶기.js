function solution(strArr) {
    const counter = Array(31).fill(0)
    for (const str of strArr){
        counter[str.length]++
    }
    return Math.max(...counter)
}