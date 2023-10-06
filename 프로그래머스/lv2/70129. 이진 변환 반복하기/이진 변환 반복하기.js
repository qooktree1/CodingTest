const solution = s => {
    let procedureCnt = 0
    let zeroCnt = 0
        
    const makeOne = s => {
        if (s === "1") return
        else {
            let newS = ""
            for (const c of s){
                if (c === "1") newS += c
                else zeroCnt++
            }
            procedureCnt++
            makeOne(newS.length.toString(2))
        }
    }
    makeOne(s)
    return [procedureCnt, zeroCnt]
}