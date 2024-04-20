const solution = (A, B) => {
    let answer = 0
    for (let i=0; i<A.length; i++) {
        if (A === B) return answer
        B = B.substring(1, B.length) + B[0]
        answer++
    }
    return -1
}