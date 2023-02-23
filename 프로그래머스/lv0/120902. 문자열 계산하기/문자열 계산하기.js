function solution(my_string) {
    let answer = 0
    const operatorStack = []
    const newArray = my_string.split(" ")
    
    for (const c of newArray){
        
        // 숫자이면
        if (parseInt(c) == c){
            
            // 계산 준비 완료
            if (operatorStack.length > 0){
                const tmp = operatorStack.pop()
                if (tmp === "+") answer += parseInt(c)
                else if (tmp === "-") answer -= parseInt(c)
            }
            else answer = parseInt(c)
            
        }
        
        
        // 연산자면
        else if (c === "+" || c === "-") operatorStack.push(c)
    }
    return answer
}