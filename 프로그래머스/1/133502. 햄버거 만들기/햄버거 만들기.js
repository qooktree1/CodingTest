const solution = ingredient => {
    let answer = 0
    let stack = []
    for (const i of ingredient) {
        stack.push(i)
        if (stack.slice(-4).join("") === "1231") {
            stack.splice(-4)
            answer++
        }
    }
    return answer
}