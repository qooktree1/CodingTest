const solution = s => {
    const dict = {}
    const answer = []
    for (let i=0; i<s.length; i++){
        if (s[i] in dict) {
            answer.push(i - dict[s[i]])
        } else {
            answer.push(-1)
        }
        dict[s[i]] = i
    }
    return answer
}