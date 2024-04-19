const calc = c => Math.min(91 - c.charCodeAt(), c.charCodeAt() - 65)

const solution = name => {
    let answer = 0
    let idx = 0
    let minMove = name.length - 1
    const aNumber = 'A'.charCodeAt()
    for (let i=0; i<name.length; i++) {
        answer += calc(name[i])
        idx = i + 1
        while (idx < name.length && name[idx] === "A") {
            idx++
        }
        
        minMove = Math.min(minMove, i * 2 + name.length - idx, i + 2 * (name.length - idx))
        
    }
    return answer + minMove
}