function solution(numer1, denom1, numer2, denom2) {
    let top = numer1 * denom2 + numer2 * denom1
    let bottom = denom1 * denom2
    let check = 0
    for (let i=1; i<= bottom; i++){
        if (top % i === 0 && bottom % i === 0) check = i
    }
    return [top / check, bottom / check]
}