function solution(balls, share) {
    return Math.round(fact(balls) / (fact(balls-share) * fact(share)))
}

function fact(n){
    let result = 1
    for (let i=2; i<=n; i++) result *= i
    return result
}