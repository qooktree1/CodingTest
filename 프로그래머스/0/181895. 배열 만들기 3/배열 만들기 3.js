const solution = (arr, intervals) => {
    let answer = []
    for (const interval of intervals) {
        answer = [...answer, ...arr.slice(interval[0], interval[1] + 1)]
    }
    return answer
}