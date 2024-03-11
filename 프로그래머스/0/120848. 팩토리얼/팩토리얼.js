const solution = n => {
    let factorialNum = 1
    for (let i=1; i<=10; i++) {
        factorialNum *= i
        if (n === factorialNum) return i
        if (n < factorialNum) return i - 1
    }
}