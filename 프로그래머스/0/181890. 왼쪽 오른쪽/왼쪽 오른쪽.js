const solution = strList => {
    let index = -1
    const strListLen = strList.length
    for (let i=0; i<strListLen; i++) {
        if (strList[i] === "l" || strList[i] === "r") {
            index = i
            break
        }
    }
    
    if (index === -1 || index === -1) return []
    
    if (strList[index] === "l") return strList.slice(0, index)
    return strList.slice(index + 1)
}