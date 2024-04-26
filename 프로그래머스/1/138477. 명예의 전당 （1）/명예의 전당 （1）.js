const solution = (k, score) => {
    const stack = []
    const answer = []
    for (let i=0; i<k; i++) {
        
    }
    for (let i=0; i<score.length; i++) {
        stack.push(score[i])
        stack.sort((a,b) => a-b)
        if (stack.length > k) stack.shift()
        answer.push(stack[0])
    }
    
    return answer
}
