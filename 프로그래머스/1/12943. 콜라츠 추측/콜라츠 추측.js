const solution = num => {
    let cnt = 0
    
    while (num > 1 && cnt < 500) {
        if (num % 2 === 0) num /= 2
        else num = num * 3 + 1
        cnt++
    }
    
    return cnt >= 500 ? -1 : cnt
}