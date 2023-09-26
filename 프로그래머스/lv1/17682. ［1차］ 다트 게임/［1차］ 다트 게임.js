const solution = dartResult => {
    let answer = 0
    const stack = []
    let number = ""
    for (const dart of dartResult){
        if (!isNaN(dart)) number += dart
        else if (dart === "S"){
            stack.push(Number(number))
            number = ""
        } else if (dart === "D"){
            stack.push(Number(number ** 2))
            number = ""
        } else if (dart === "T"){
            stack.push(Number(number ** 3))
            number = ""
        } else if (dart === "#"){
            stack[stack.length - 1] *= -1
        } else if (dart === "*"){
            if (stack.length === 1) stack[stack.length - 1] *= 2
            else{
                stack[stack.length - 1] *= 2
                stack[stack.length - 2] *= 2
            }
        }
    }
    answer += stack.reduce((a,b) =>a+b, 0)
    
    
    return answer
}