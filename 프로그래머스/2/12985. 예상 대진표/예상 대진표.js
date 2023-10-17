// A와 B를 각각 2로 나누며 참가자들을 붙게 만든다.

const divide = num => {
    if (num % 2 !== 0) return parseInt(num / 2) + 1
    return parseInt(num / 2)
}


const solution = (n, a, b) => {
    cnt = 0
    while (true) {
        if (a === b || Math.abs(a-b) === 1 && divide(a) === divide(b)){
            return cnt + 1
        }
        a = divide(a)
        b = divide(b)
        cnt++
    }
}
