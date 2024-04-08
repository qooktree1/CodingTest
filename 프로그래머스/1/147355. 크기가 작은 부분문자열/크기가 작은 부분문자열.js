const solution = (t, p) => {
    const numberP = +p
    let answer = 0
    for (let i=0; i<t.length - p.length + 1; i++) {
        if (+t.substring(i, p.length + i) <= numberP) answer++
    }
    return answer
}