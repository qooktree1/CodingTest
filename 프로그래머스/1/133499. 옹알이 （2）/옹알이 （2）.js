const solution = babbling => {
    const WORDS = ["aya", "ye", "woo", "ma"]
    let answer = 0
    
    for (let babble of babbling) {
        let stack = ""
        let prev = ""
        for (const b of babble) {
            stack += b
            if (stack === prev) break
            if (WORDS.includes(stack)) {
                prev = stack
                stack = ""
            }
            if (stack.length > 4) break
        }
        if (stack === "") answer++
    }
    return answer
}