function solution(quiz) {
    const answer = []
    for (const q of quiz){
        const tmpQ = q.split(" ")
        const numberStack = []
        let operatorStack = []
        for (const c of tmpQ){
            if (parseInt(c) == c){
                if (operatorStack.length > 0){
                    const tmpoperator = operatorStack.pop()
                    if (tmpoperator === "-") numberStack[0] -= parseInt(c)
                    else if (tmpoperator === "+") numberStack[0] += parseInt(c)
                } else numberStack.push(parseInt(c))
            }
            else if (c === "-") operatorStack.push(c)
        }
        
        if (numberStack.splice(0, numberStack.length-1).reduce((a,b) => a+b, 0) === numberStack[numberStack.length - 1]) answer.push("O")
        else answer.push("X")
    }
    
    
    return answer
}