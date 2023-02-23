function solution(order) {
    const orderArray = String(order).split("")
    let answer = 0
    orderArray.map(order => {
        if (order === "3" || order === "6" || order === "9") answer += 1
    })
    return answer
}