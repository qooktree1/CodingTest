function solution(t, p) {
    const array = []
    for (let i=0; i<t.length-p.length+1; i++){
        array.push(Number(t.slice(i,i+p.length)))
    }
    return array.filter(x => x <= Number(p)).length
}