const solution = (myString, m, c) => {
    let answer = ""
    for (let i=0; i<myString.length; i+= m) {
        answer += myString[i + c - 1]
    }
    return answer
}