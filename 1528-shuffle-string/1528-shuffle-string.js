const restoreString = (s, indices) => {
    const answer = new Array(s.length).fill('')
    for (let i=0; i<indices.length; i++) answer[indices[i]] = s[i]
    return answer.join("")
}