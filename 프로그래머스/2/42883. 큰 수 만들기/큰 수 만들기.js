const solution = (number, k) => {
    const numLen = number.length - k
    let answer = ""
    for (let i=0; i<number.length; i++) {
        let check = +number[i]
        let flag = false
        for (let j=i+1; j<number.length; j++) {
            if (check < +number[j]) {
                flag = true
                break
            }
        }
        if (!flag) answer += number[i]
    }
    return answer
}