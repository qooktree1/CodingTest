const solution = (myString, pat) => {
    let answer = 0
    let patLen = pat.length
    for (let i=0; i<myString.length - pat.length + 1; i++) {
        if (myString.slice(i, i + patLen) === pat) answer++
    }
    return answer
}