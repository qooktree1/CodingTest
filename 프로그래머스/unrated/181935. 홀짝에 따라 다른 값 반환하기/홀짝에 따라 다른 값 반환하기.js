function solution(n) {
    let ans = 0
    if (n % 2){
        for (let i=n; i>-1; i--){
            if (i % 2) ans += i
        }
    } else {
        for (let i=n; i>-1; i--){
            if (i % 2 === 0) ans += i**2
        }
    }
    
    
    
    
    return ans
}