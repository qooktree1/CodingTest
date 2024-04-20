const solution = quiz => quiz.map(problem => {
    let result
    const [num1, op, num2, , res] = problem.split(' ')
    if (op === "+") result = +num1 + +num2 === +res
    else result = +num1 - +num2 === +res
    return result ? "O" : "X"
})