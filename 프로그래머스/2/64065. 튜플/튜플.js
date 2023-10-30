const makeS = s => {
    const arr = []
    s = s.slice(1, s.length - 1)
    let tmp = []
    let tmpNum = ""
    for (let i=0; i<s.length; i++) {
        if (s[i] === "}") {
            if (tmpNum !== "") tmp.push(Number(tmpNum))
            arr.push(tmp)
            tmp = []
        } else if (s[i] === "{") {
            tmp = []
            tmpNum = ""
        } else if (s[i] === ",") {
            tmp.push(Number(tmpNum))
            tmpNum = ""
        }
        else {
            tmpNum += s[i]
        }
    }
    return arr
}

const solution = s => {
    const newS = makeS(s)
    const answer = []
    console.log(newS[0])
    newS.sort((a,b) => a.length - b.length)  // 가장 원소의 개수가 작은 것부터 정렬
    for (let i=0; i<newS.length; i++) {
        for (let j=0; j<newS[i].length; j++) {
            if (!answer.includes(newS[i][j])) {
                answer.push(newS[i][j])
            }
        }
    }
    
    return answer
}