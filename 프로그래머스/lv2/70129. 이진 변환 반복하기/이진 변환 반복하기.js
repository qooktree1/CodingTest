function solution(s) {
    let convertCnt = 0
    let zeroCnt = 0
    
    while (1) {
        const originLen = s.length
        s = s.split("").filter(x => x === "1").join("")
        zeroCnt += originLen - s.length
        convertCnt += 1
        s = s.length.toString(2)
        if (s === "1") {
            return [convertCnt, zeroCnt]
        }
        
    }
        
}