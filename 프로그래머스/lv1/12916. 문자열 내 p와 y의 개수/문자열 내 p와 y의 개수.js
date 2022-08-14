function solution(s){
    let pCnt = 0
    let yCnt = 0
    for (let i=0; i<s.length; ++i){
        if (s[i] ==="p" || s[i] === "P") {pCnt += 1}
        else if (s[i] === "y" || s[i] ==="Y") {yCnt += 1}
    }
    console.log(pCnt, yCnt)
    if ((pCnt === 0 && yCnt === 0) || (pCnt === yCnt)){
        return true
    } else {
        return false
    }
}