function solution(l, r) {
    const ans = []
    for (let i=l; i<=r; i++){
        const compare = i.toString().split("")
        const numberArr = [...new Set(compare)].sort((a,b) => a-b)
        if (numberArr.length === 1 && (numberArr[0] === "0" || numberArr[0] === "5")) ans.push(i)
        else if (numberArr.length === 2 && numberArr[0] === "0" && numberArr[1] === "5") ans.push(i)
    }
    return ans.length > 0 ? ans : [-1]
}