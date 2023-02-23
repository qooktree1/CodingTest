function solution(my_string) {
    const newString = my_string.split("")
    const answer = []
    newString.map(c => {
        if (!answer.includes(c)) answer.push(c)
    })
    return answer.join("")
}