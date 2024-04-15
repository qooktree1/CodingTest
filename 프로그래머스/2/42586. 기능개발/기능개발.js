const solution = (progresses, speeds) => {
    const neccessaryTimes = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]))
    console.log(neccessaryTimes)
    const answer = []
    let sameDay = 1
    let compareTime = neccessaryTimes[0]
    for (let i=0; i<neccessaryTimes.length - 1; i++) {
        if (compareTime >= neccessaryTimes[i + 1]) sameDay++
        else {
            answer.push(sameDay)
            sameDay = 1
            compareTime = neccessaryTimes[i + 1]
        }
    }
    if (sameDay) answer.push(sameDay)
    return answer
}