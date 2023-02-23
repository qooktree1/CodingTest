function solution(price) {
    let answer = 0
    if (price >= 100000) answer = price - (price * 0.05)
    if (price >= 300000) answer = price - (price * 0.1)
    if (price >= 500000) answer = price - (price * 0.2)
    
    if (answer === 0) return price
    else return parseInt(answer)
}