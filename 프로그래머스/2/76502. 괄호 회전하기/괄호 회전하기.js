const isProperBracket = newS => {
    const brackets = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    
    const stack = []
    newS.split("").forEach(c => {
        stack.push(c)
        while (stack.length >= 2) {
            const top = stack[stack.length - 1]
            const secondTop = stack[stack.length - 2]
            if (brackets[secondTop] === top) {
                stack.pop()
                stack.pop()
            } else {
                break
            }
        }
    })
    if (stack.length > 0) return 0
    return 1
}


const solution = s => {
    let rotate = s.length
    let answer = 0
    
    for (let i=0; i<rotate; i++) {
        s = s.slice(1) + s.slice(0, 1)
        answer += isProperBracket(s)
    }
    
    return answer
}