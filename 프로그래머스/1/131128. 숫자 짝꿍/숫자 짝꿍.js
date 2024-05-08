const makeCountObj = s => {
    const countObj = {}
    for (let i=0; i<s.length; i++) {
        countObj[s[i]] = (countObj[s[i]] || 0) + 1
    }
    return countObj
}

const solution = (x, y) => {
    let answer = ""
    const a = makeCountObj(x)
    const b = makeCountObj(y)
    for (const [key, value] of Object.entries(a)) {
        if (b[key]) {
            answer += key.repeat(Math.min(b[key], value))
        }
    }
    answer = String(answer.split("").sort((a,b) => b-a).join(""))
    if (answer === "") return "-1"
    if (answer[0] === "0") return "0"
    return answer
}