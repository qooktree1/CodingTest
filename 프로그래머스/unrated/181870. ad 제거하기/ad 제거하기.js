function solution(strArr) {
    const ans = []
    for (let i=0; i<strArr.length; i++){
        if (!strArr[i].includes("ad")) ans.push(strArr[i])
    }
    return ans
}