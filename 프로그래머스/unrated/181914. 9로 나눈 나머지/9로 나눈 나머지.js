function solution(number) {
    let ssum = 0
    for (let i=0; i<number.length; i++) ssum += Number(number[i])
    return ssum % 9
}