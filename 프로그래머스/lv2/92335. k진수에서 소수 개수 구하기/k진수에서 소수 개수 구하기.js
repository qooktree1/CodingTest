const isPrime = (number) => {
    if (number === 2) {
        return true
    }
    if (number === 1) {
        return false
    }
    
    for (let i=2; i<= Math.floor(Math.sqrt(number)); ++i) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}


function solution(n, k) {
    let convertedNumber = n.toString(k)
    let answer = 0
    convertedNumber.split("0").map((num) => {
        if (num !== "" && isPrime(Number(num))) {
            answer += 1
        }
    })
    return answer
}