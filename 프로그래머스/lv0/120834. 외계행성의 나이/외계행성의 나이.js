function solution(age) {
    const ageArray = String(age).split("")
    const answer = []
    for (const age of ageArray){
        answer.push(String.fromCharCode(parseInt(age) + 97))
    }
    return answer.join("")
}