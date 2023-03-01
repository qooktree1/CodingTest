function solution(n) {
    const numbers = []
    for (let i=0; i<=10000; i++){
        if (i % 3 !== 0 && !String(i).includes("3")) numbers.push(i)
    }
    return numbers[n-1]
}