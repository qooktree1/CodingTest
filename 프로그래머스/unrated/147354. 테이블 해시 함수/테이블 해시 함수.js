function solution(data, col, row_begin, row_end) {
    let ans = 0
    data.sort((a,b) => {
        if (a[col-1] < b[col-1]) return a[col-1] - b[col-1]
        else if (a[col-1] === b[col-1]) return b[0] - a[0]
    })
    
    let tmp = 0
    for (let i=row_begin; i<=row_end; i++){
        tmp = data[i-1].reduce((a,b) => a + (b % i), 0)
        ans ^= tmp
    }
    return ans
}