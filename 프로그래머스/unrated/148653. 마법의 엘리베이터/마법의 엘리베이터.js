function solution(storey) {
    let ans = 0
    
    while (storey > 0){
        const n = storey % 10
        if (n > 5){
            storey += 10 - n
            ans += 10 - n
        } else if (n === 5 && storey % 100 / 10 > 5) {
            ans += n
            storey += n
        } else {
            ans += n
            storey -= n
        }
        storey = storey / 10
    }
    
    return ans
}