function solution(keymap, targets) {
    return targets.map(target => {
        let total = 0
        let check
        for (let i=0; i<target.length; i++){
            let minIndex = 101
            check = false
            for (let j=0; j<keymap.length; j++){
                if (minIndex > keymap[j].indexOf(target[i]) && keymap[j].indexOf(target[i]) !== -1){
                    minIndex = keymap[j].indexOf(target[i]) + 1
                    check = true
                }
            }
            total += minIndex
            if (check === false) return -1
        }
        if (total === 101) return -1
        return total
    })
}