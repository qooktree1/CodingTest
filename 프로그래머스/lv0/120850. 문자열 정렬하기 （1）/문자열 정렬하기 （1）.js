function solution(my_string) {
    const newString = my_string.split("")
    const answerString = []
    for (const str of newString){
        if (str == parseInt(str)) answerString.push(parseInt(str))
    }
    return answerString.sort((a,b)=>a-b)
}