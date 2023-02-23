function solution(my_string) {
    const newString = my_string.split("")
    const answer = []
    for (let cc of newString){
        if (cc === cc.toUpperCase()) answer.push(cc.toLowerCase())
        else if (cc === cc.toLowerCase()) answer.push(cc.toUpperCase())
    }
    return answer.join("")
}