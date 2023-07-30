// 로타르 콜라츠
const hailSequence = k => {
    const hail = []
    while (k !== 1){
        hail.push(k)
        if (k % 2 === 0) k = k / 2
        else k = k * 3 + 1
    }
    hail.push(k)
    return hail
}


const solution = (k, ranges) => {
    const sequence = hailSequence(k)
    const ans = []
    const areas = []
    for (let i=1; i<sequence.length; i++){
        areas.push((sequence[i-1] + sequence[i]) / 2)
    }
    const n = areas.length
    
    for (const [s, e] of ranges){
        if (s > n + e) ans.push(-1)
        else if (s === n + e) ans.push(0)
        else ans.push(areas.slice(s, n+e).reduce((a,b) => a+b, 0))
    }
    
    return ans
}