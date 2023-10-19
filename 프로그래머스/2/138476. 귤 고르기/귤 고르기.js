const solution = (k, tangerines) => {
    let ans = 0
    const tangerineObject = {}
    for (const tangerine of tangerines) {
        if (tangerine in tangerineObject) tangerineObject[tangerine] += 1
        else tangerineObject[tangerine] = 1        
    }
    const sortedTangerines = [...Object.entries(tangerineObject)].sort((a,b) => b[1] - a[1])
    
    for (const arr of sortedTangerines) {
        k -= arr[1]
        ans++
        if (k <= 0) return ans
    }
    return ans
}