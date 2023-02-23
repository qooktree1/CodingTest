function solution(cipher, code) {
    const answer = []
    let codeTmp = code
    while (cipher.length > codeTmp - code){
        answer.push(cipher[codeTmp-1])
        codeTmp += code
    }
    return answer.join("")
}