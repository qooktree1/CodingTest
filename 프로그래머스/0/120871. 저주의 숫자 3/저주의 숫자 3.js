const solution = n => {
    let cnt = 0
    for (let i=1; i<= 1000; i++) {
        if (String(i).includes('3') === false && i % 3 !== 0) cnt++
        if (cnt === n) return i
    }
}