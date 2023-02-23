function solution(my_string, letter) {
    const newString = my_string.split("")
    const answerString = []
    newString.map(str => {
        if (str !== letter) answerString.push(str)
    })
    return answerString.join("")
}