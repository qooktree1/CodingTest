const solution = numLog => {
    let answer = ""
    for (let i=0; i<numLog.length - 1; i++) {
        const [first, second] = [numLog[i], numLog[i + 1]]
        if (first === second - 1) answer += "w"
        else if (first - 1 === second) answer += "s"
        else if (first === second - 10) answer += "d"
        else if (first - 10 === second) answer += "a"
    }
    return answer
}