function solution(array) {
    let answer = 0
    array.map(num => {
        const newNum = String(num).split("")
        answer += newNum.filter(x => x === "7").length
    })
    return answer
}