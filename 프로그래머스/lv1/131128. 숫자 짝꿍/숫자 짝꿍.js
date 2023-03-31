function solution(X, Y) {
    const answer = []
    const x = new Array(10).fill(0)
    const y = new Array(10).fill(0)
    
    X.split("").forEach(n => x[n]++)
    Y.split("").forEach(n => y[n]++)
    
    for (let i=0; i<10; i++){
        const m = Math.min(x[i], y[i])
        for (let j=0; j<m; j++) answer.push(i)
    }
    
    let numbers = answer.sort((a,b) => b-a)
    if (numbers[0] === 0) numbers = [0]
    if (numbers.length === 0) numbers = [-1]
    return numbers.join("")
}