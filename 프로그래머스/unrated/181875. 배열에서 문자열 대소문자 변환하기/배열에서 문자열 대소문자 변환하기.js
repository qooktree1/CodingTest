function solution(strArr) {
    const ans = []
    for (let i=0; i<strArr.length; i++){
        if (i % 2 === 0) ans.push(strArr[i].toLowerCase())
        else ans.push(strArr[i].toUpperCase())
    }
    return ans
}