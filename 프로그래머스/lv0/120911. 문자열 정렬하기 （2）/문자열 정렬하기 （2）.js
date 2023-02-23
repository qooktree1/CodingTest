function solution(my_string) {
    const newString = my_string.split("")
    const answerString = []
    for (const str of newString) answerString.push(str.toLowerCase())
    answerString.sort()
    return answerString.join("")
}