function solution(myString) {
    const answerString = myString.split("x").filter(x => x)
    
    
    return answerString.sort((a,b) => a.localeCompare(b))
}