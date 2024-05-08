const solution = (keymap, targets) => {
    const keyDict = {}
    for (let i=0; i<keymap.length; i++) {
        for (let j=0; j<keymap[i].length; j++) {
            const c = keymap[i][j]
            if (keyDict[c] === undefined) keyDict[c] = j
            else if (keyDict[c] > j) keyDict[c] = j
        }
    }
    
    return targets.map(target => {
        let answer = 0
        for (let i=0; i<target.length; i++) {
            answer += keyDict[target[i]] + 1
        }
        return answer || -1
    })
}