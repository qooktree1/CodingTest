function solution(order) {
    let ans = 0
    for (const coffee of order){
        if (coffee === "anything") ans += 4500
        else if (coffee.includes("cafelatte")) ans += 5000
        else if (coffee.includes("americano")) ans += 4500
    }
    
    return ans
}