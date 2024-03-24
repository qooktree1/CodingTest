const solution = numList => {
    let answer = 0
    for (let num of numList) {
        while (num > 1) {
            if (num % 2 === 0) {
                num /= 2
                answer++
            } else num -= 1
        }
    }
    return answer
}