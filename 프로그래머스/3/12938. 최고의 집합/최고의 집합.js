const solution = (n, s) => {
    if (n >= s) return [-1]
    
    const quotient = Math.floor(s / n)
    const answer = new Array(n).fill(quotient)
    const remain = s % n
    
    for (let i=0; i<remain; i++) {
        answer[i] += 1
    }
    return answer.sort((a,b) => a-b)
}