const isDeletable = (top, c) => {
    return (top === '(' && c === ')')
    || (top === '[' && c === ']')
    || (top === '{' && c === '}')
}

const isCorrectString = (s) => {
    const stack = []
    for (let i=0; i<s.length; i++) {
        if (isDeletable(stack[stack.length - 1], s[i])) stack.pop()
        else stack.push(s[i])
    }
    return stack.length > 0 ? false : true
}

const solution = s => {
    let answer = 0
    const sArr = s.split("")
    for (let i=0; i<s.length; i++) {
        answer += isCorrectString(sArr.join(""))
        sArr.unshift(sArr.pop())
    }
    
    return answer
}