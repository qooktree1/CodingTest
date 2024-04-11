const solution = (A, B) => {
    let answer = 0
    const bArr = [...A]
    for (let i=0; i<A.length; i++) {
        if (B === bArr.join("")) return answer
        else {
            bArr.unshift(bArr.pop())
            answer++
        }
    }
    
    return -1
}