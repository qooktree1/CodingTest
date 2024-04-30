const decode = (encoded, first) => {
    const answer = [first]
    for (let i=0; i<encoded.length; i++) answer.push(answer[answer.length - 1] ^ encoded[i])
    return answer
}
