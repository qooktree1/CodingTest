const solution = (l, r) => {
    const answer = []
    for (let i=l; i<=r; i++) {
        if (String(i).replace(/5|0/g , "") === "") answer.push(i)
    }
    
    return answer.length > 0 ? answer : [-1]
}