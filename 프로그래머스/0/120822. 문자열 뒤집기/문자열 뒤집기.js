const solution = myString => {
    let answer = ""
    for (let i=0; i<myString.length; i++) {
        answer = myString[i] + answer
    }
    return answer
}