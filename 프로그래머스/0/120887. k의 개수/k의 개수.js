const solution = (i, j, k) => {
    let answer = 0
    for (let idx=i; idx<=j; idx++) {
        answer += String(idx).split("").filter(n => +n === k).length
    }
    return answer
}