function solution(elements) {
    const N = elements.length
    const ans = new Set([...elements])
    elements = [...elements, ...elements]
    for (let i=1; i<=N; i++){
        for (let j=0; j<elements.length; j++){
            ans.add(elements.slice(j, j+i).reduce((a,b) => a+b,0))
        }
    }
    
    return ans.size
}