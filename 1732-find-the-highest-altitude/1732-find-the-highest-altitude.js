const largestAltitude = gain => {
    const arr = [0]
    let answer = 0
    gain.forEach(num => {
        answer = Math.max(answer, arr[arr.length - 1] + num)
        arr.push(arr[arr.length - 1] + num)
    })
    return answer
}