function solution(s) {
    const sArray = s.split("")
    const answer = []
    for (const str of sArray){
        if (sArray.indexOf(str) === sArray.lastIndexOf(str)) answer.push(str)
    }
    answer.sort()
    return answer.join("")
}