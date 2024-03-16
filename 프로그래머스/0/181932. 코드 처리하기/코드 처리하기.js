const solution = code => {
    const codeLen = code.length
    let mode = false
    let result = ""
    for (let i=0; i<codeLen; i++) {
        if (mode) {
            if (code[i] !== '1' && i % 2) result += code[i]
            if (code[i] === '1') mode = !mode
        } else {
            if (code[i] !== '1' && i % 2 === 0) result += code[i]
            if (code[i] === '1') mode = !mode
        }
    }
    return result ? result : "EMPTY"
}