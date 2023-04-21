function solution(a, b) {
    return Number(a.toString() + b.toString()) > a * b * 2 ? Number(a.toString() + b.toString()) : a * b * 2
}