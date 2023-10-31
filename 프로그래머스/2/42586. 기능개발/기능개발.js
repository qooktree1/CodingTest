// rate = 0

const solution = (progresses, speeds) => {
    let sameTime = 0
    const answer = []
    let maxRate = 0
    let rate = 0
    for (let i=0; i<progresses.length; i++) {
        rate = Math.ceil((100 - progresses[i]) / speeds[i])
        
        if (sameTime === 0) {
            maxRate = rate
            sameTime++
        } else if (rate <= maxRate) {
            sameTime++
        } else {
            answer.push(sameTime)
            sameTime = 1
            maxRate = rate
        }
    }
    if (sameTime > 0) answer.push(sameTime)
        
    return answer
}