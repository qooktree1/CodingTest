function solution(binomial) {
    const arr = binomial.split(" ")
    const stack1 = []
    
    while (arr.length > 0){
        const x = arr.shift()
        if (stack1.length === 0) stack1.push(Number(x))
        else if (x === "+") stack1[0] = stack1[0] + Number(arr.shift())
        else if (x === "-") stack1[0] = stack1[0] - Number(arr.shift())
        else if (x === "*") stack1[0] = stack1[0] * Number(arr.shift())
    }
    return stack1[0]
}