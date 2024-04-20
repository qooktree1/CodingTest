const solution = (k, tangerine) => {
    const tangerineObj = {}
    for (const num of tangerine) {
        tangerineObj[num] = (tangerineObj[num] || 0) + 1
    }
    const tangerineArr = [...Object.values(tangerineObj).sort((a,b) => b - a)]
    let answer = 0
    for (let i=0; i<tangerineArr.length; i++) {
        k -= tangerineArr[i]
        if (k <= 0) return i + 1
    }
}