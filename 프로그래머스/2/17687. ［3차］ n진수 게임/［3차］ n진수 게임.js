const createStr = (n, t, m) => {
    let allStr = ""
    for (let i=0; i<=t * m; i++) {
        const convertedNumber = i.toString(n)
        allStr += convertedNumber.toUpperCase()
    }
    return allStr
}


const solution = (n, t, m, p) => {
    let ans = ""
    let allStr = createStr(n, t, m)
    for (let i = p - 1; i < allStr.length; i += m) {
        ans += allStr[i]
        if (ans.length === t) return ans
    }
    
    
    return ans
}