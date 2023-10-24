const solution = citations => {
    citations.sort((a, b) => b-a)
    let answer = citations.length
    
    while (answer > 0) {
        const isLarge = citations.slice(0, answer)
        const isSmall = citations.slice(answer + 1)
        let flag = true
        for (let i=0; i<isLarge.length; i++) {
            if (answer > isLarge[i]) {
                flag = false
                break
            }
        }
        for (let i=0; i<isSmall.length; i++) {
            if (answer < isSmall[i]) {
                flag = false
                break
            }
        }
        if (flag) return answer
        answer--
    }
    return answer
}