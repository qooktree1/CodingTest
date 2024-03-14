const solution = binomial => {
    let [a, op, b] = binomial.split(' ')
    a = Number(a)
    b = Number(b)
    switch (op) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
    }
}