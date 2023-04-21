function solution(myString, pat) {
    myString = myString.toLowerCase()
    pat = pat.toLowerCase()
    for (let i=0; i<myString.length - pat.length + 1; i++){
        if (pat === myString.slice(i, i + pat.length)) return 1
    }
    return 0
}