const solution = elements => {
    const N = elements.length
    elements = [...elements, ...elements]
    const ans = new Set()
    for (let i=0; i<N; i++) {
        for (let j=Math.max(0, i); j<N+i; j++) {
            ans.add(elements.slice(i, j+1).reduce((a,b) => a+b, 0))
        }
    }
    return ans.size
}