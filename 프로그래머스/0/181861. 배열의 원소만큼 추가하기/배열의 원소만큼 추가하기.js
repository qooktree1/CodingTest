const solution = arr => {
    const answer = []
    for (let i=0; i<arr.length; i++) {
        answer.push(...Array.from({length: Number(arr[i])}, (_) => arr[i]))
    }
    return answer
}