const solution = myString => {
    let answer = 0
    for (let i=0; i<myString.length; i++) {
        if (!isNaN(myString[i])) answer += Number(myString[i])
    }
    return answer
}