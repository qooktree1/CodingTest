function solution(number, n, m) {
    if (number % n || number % m) return 0
    return 1
}