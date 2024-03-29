const solution = myString => {
    let answer = 0
    const stack = []
    let op = "+"
    const myStringArr = myString.split(" ")
    myStringArr.forEach(c => {
        if (stack.length >= 2) {
            const op = stack.pop()
            const num = stack.pop()
            if (op === "+") answer = +num + +c
            else answer = +num - +c
            stack.push(answer)
        } else stack.push(c)
    })
    return answer
}