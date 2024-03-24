const solution = s => {
    const stack = []
    s.split(" ").forEach(c => {
        if (c === "Z") stack.pop()
        else stack.push(c)
    })
    return stack.reduce((a,b) => a + +b, 0)
}