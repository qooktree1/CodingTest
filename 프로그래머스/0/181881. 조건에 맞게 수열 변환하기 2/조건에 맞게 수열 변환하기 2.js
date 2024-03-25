const solution = arr => {
    let times = 0
    let newArr = arr.slice()
    while (true) {
        const beforeText = newArr.join('.')
        for (let i=0; i<newArr.length; i++) {
            if (newArr[i] >= 50 && !(newArr[i] % 2)) newArr[i] /= 2
            else if (newArr[i] < 50 && newArr[i] % 2) newArr[i] = newArr[i] * 2 + 1
        }
        const afterText = newArr.join('.')
        if (beforeText === afterText) return times
        times++
    }
}