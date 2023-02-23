function solution(n) {
    const number = n ** (1/2)
    if (number === parseInt(number)) return 1
    else return 2
}