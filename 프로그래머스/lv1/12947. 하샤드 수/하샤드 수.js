function solution(x) {
    const strX = x.toString()
    let hazard = 0
    
    for (let i=0; i<strX.length; ++i) {
        hazard += Number(strX[i])
    }
    if (x % hazard) {
        return false
    } else {
        return true
    }
}