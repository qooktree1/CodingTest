function solution(code) {
    let mode = 0
    const ans = []
    for (let i=0; i < code.length; i++){
        if (code[i] === "1"){
            if (mode === 0) mode = 1
            else mode = 0
        } else {
            if (mode === 0 && i % 2 === 0) ans.push(code[i])
            else if (mode === 1 && i % 2 === 1) ans.push(code[i])
        }
    }
    return ans.length === 0 ? "EMPTY" : ans.join("")
}