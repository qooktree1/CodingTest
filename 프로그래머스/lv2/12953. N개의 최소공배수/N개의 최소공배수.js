// 문제: N개의 최소공배수
// 시간: 27분
// 알고리즘: 최대공약수를 구한 후 최소공배수 구하기

const solution = arr => {
    arr.sort((a,b) => a-b)
    let ans = arr[0]
    
    for (let i=1; i<arr.length; i++){
        ans = lcm(arr[i], ans)
    }
    return ans
}

const lcm = (a, b) => {
    return (a * b) / gcd(a, b)
}

const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
}