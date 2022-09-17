function solution(s) {
    const array = s.split(" ")
    const maxVal = Math.max(...array)
    const minVal = Math.min(...array)
    const answer = String(minVal) + " " + String(maxVal)
    return answer
}