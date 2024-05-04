const scoreOfString = s => {
    let answer = 0
    for (let i=0; i<s.length - 1; i++) {
        answer += Math.abs(s[i].charCodeAt() - s[i+1].charCodeAt())
    }
    return answer
}