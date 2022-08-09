function solution(n) {
    const stringN = String(n)
    const a = stringN.split("")
    const b = a.reverse()
    for (let i = 0; i < b.length; ++i){
        b[i] = Number(b[i])
    }
    return b
}